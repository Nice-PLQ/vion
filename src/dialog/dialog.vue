
<template>
  <v-popup
    :class="{
      [`${name}`]: true,
      [dialogClass]: dialogClass
    }"
    :visible="currentVisible"
    :lock-scroll="lockScroll"
    :teleport-disabled="true"
    position="center"
  >
    <div :class="`${name}__box`">
      <div :class="`${name}__content`">
        <div :class="`${name}__title`" v-if="title">{{title}}</div>
        <div :class="`${name}__description`" :style="contentStyle">
          <slot>
            <div v-if="!dangerouslyUseHTMLString">{{content}}</div>
            <div v-else v-html="content"></div>
          </slot>
        </div>
      </div>

      <div
        v-if="formatButtons"
        :class="{
          [`${name}__footer`]: true,
          [`${name}__btn_vertical`]: formatButtons.length > 2
        }"
      >
        <div
          :class="`${name}__btn`"
          v-for="(btn, index) in formatButtons"
          :key="index"
          :style="{color: btn.color}"
          @click="onCustomActionClick(index)"
        >{{btn.text}}</div>
      </div>

      <div :class="`${name}__footer`" v-else>
        <button
          :class="`${name}__btn`"
          :style="{color: cancelBtnTextColor}"
          v-if="showCancelBtn"
          @click="onActionClick('cancel')"
        >{{cancelBtnText || $locale.translate('cancel')}}</button>
        <button
          :class="`${name}__btn`"
          :style="{color: confirmBtnTextColor}"
          v-if="showConfirmBtn"
          @click="onActionClick('confirm')"
        >{{confirmBtnText || $locale.translate('confirm')}}</button>
      </div>
    </div>
  </v-popup>
</template>

<script>
import { defineComponent, computed } from 'vue';
import VPopup from '../popup';
import { prefix } from '../config';

const name = `${prefix}-dialog`;

export default defineComponent({
  name,
  components: { VPopup },
  props: {
    modelValue: Boolean,
    /**
     * @description 是否显示对话框
     * @attribute visible
     */
    visible: Boolean,
    /**
     * @description 对话框的标题
     * @attribute title
     */
    title: String,
    /**
     * @description 对话框的内容，
     * @attribute content
     */
    content: String,
    /**
     * @description content字段是否支持html代码片段
     * @attribute dangerouslyUseHTMLString
     */
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    /**
     * @description 自定义对话框的class
     * @attribute dialog-class
     */
    dialogClass: String,
    /**
     * @description 是否显示确认按钮
     * @attribute show-confirm-btn
     */
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    /**
     * @description 确认按钮的文本
     * @attribute confirm-btn-text
     */
    confirmBtnText: String,
    /**
     * @description 确认按钮文本颜色
     * @attribute confirm-btn-text-color
     */
    confirmBtnTextColor: String,
    /**
     * @description 是否显示取消按钮
     * @attribute show-cancel-btn
     */
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    /**
     * @description 取消按钮的文案
     * @attribute cancel-btn-text
     */
    cancelBtnText: String,
    /**
     * @description 取消按钮文本颜色
     * @attribute cancel-btn-text-color
     */
    cancelBtnTextColor: String,
    /**
     * @description 自定义按钮
     * @attribute buttons
     */
    buttons: Array,
    /**
     * @description 是否锁定内容滚动
     * @attribute lock-scroll
     */
    lockScroll: {
      type: Boolean,
      default: true
    },
    /**
     * @description 关闭前的回调
     * @attribute before-close
     */
    beforeClose: Function,
    /**
     * @description 关闭后的回调
     * @attribute callback
     */
    callback: Function
  },
  emits: ['click', 'close', 'cancel', 'confirm', 'update:modelValue'],
  setup(props, ctx) {
    const contentStyle = computed(() => {
      const isOverflow = props.content?.length > 40;
      return {
        fontSize: isOverflow ? '14px' : undefined,
        lineHeight: isOverflow ? '17px' : undefined,
      };
    });
    const currentVisible = computed(() => props.modelValue || props.visible);
    const formatButtons = computed(() => {
      const { buttons } = props;
      if (!buttons || buttons.length === 0) return null;
      // 数据格式处理
      return buttons.map((btn) => {
        if (typeof btn === 'string') {
          return { text: btn, color: undefined };
        }
        return btn;
      });
    });

    const close = (param) => {
      ctx.emit('close');
      ctx.emit('update:modelValue', false);
      if (typeof props.callback === 'function') {
        props.callback(param);
      }
    };

    const beforeCloseCheck = (param) => {
      if (typeof props.beforeClose === 'function') {
        props.beforeClose(param, close);
      } else {
        close(param);
      }
    };

    const onCustomActionClick = (index) => {
      ctx.emit('click', index);
      beforeCloseCheck(index);
    };

    const onActionClick = (action) => {
      ctx.emit(action);
      beforeCloseCheck(action);
    };

    return {
      name,
      contentStyle,
      currentVisible,
      formatButtons,
      onCustomActionClick,
      onActionClick,
    };
  },
});
</script>
