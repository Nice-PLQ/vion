<template>
  <div
    :class="{
    [`${name}`]: true,
    [`${name}_${type}`]: true,
    [`${name}_fixed`]: fixed
  }"
    :style="{backgroundColor}"
    @click="onClick"
  >
    <div :class="`${name}__inner`">
      <div :class="`${name}__hd`">
        <div :class="`${name}__left-icon`">
          <slot name="icon">
            <component :is="leftIcon" :color="iconColor" size="24px"/>
          </slot>
        </div>
      </div>
      <div :class="`${name}__bd`">
        <span :class="`${name}__txt`" :style="{color: textColor}">
          <slot></slot>
        </span>
      </div>
      <div :class="`${name}__ft`" v-if="rightText">
        <span
          role="button"
          :class="`${name}__setting`"
          @click.stop="onRightTextClick"
        >{{rightText}}</span>
      </div>
      <component
        :is="rightIcon"
        :class="`${name}__right-icon`"
        role="button"
        v-if="rightIconType"
        :aria-label="rightIconType === 'right' ? $locale.translate('more') : $locale.translate('close')"
        size="15px"
        @click.stop="onRightIconClick"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { InfoFilled, WarningFilled, ArrowRight, Close } from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-notice-bar`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 通知栏展示的类型
     * @attribute type
     * @enum ["info", "warning", "black", "gray"]
     * @default info
     */
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'warning', 'black', 'gray'].indexOf(val) !== -1
    },
    /**
     * @description 文本颜色
     * @attribute text-color
     */
    textColor: String,
    /**
     * @description 背景颜色
     * @attribute background-color
     */
    backgroundColor: String,
    /**
     * @description 是否固定顶部
     * @attribute fixed
     */
    fixed: {
      type: Boolean,
      default: false
    },
    /**
     * @description 图标的颜色
     * @attribute icon-color
     */
    iconColor: {
      type: String,
      default: ''
    },
    /**
     * @description 右方图标类型
     * @attribute right-icon-type
     * @enum ["right", "close"]
     */
    rightIconType: {
      default: 'right',
      type: String,
      validator: val => ['right', 'close'].indexOf(val) !== -1
    },
    /**
     * @description 右方文本内容
     * @attribute right-text
     */
    rightText: {
      type: String,
      default: ''
    }
  },
  emits: ['click', 'right-text-click', 'right-icon-click'],
  setup(props, ctx) {
    const onClick = e => ctx.emit('click', e);
    const onRightTextClick = e => ctx.emit('right-text-click', e);
    const onRightIconClick = e => ctx.emit('right-icon-click', e);

    const leftIcon = computed(() => (props.type === 'warning' ? WarningFilled : InfoFilled));
    const rightIcon = computed(() => (props.rightIconType === 'right' ? ArrowRight : Close));

    return {
      name: `${prefix}-notice`,
      leftIcon,
      rightIcon,
      onClick,
      onRightTextClick,
      onRightIconClick
    };
  }
});
</script>
