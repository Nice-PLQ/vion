<template>
  <v-popup
    :class="name"
    :visible="currentVisible"
    :to="to"
    :teleport-disabled="teleportDisabled"
    @close="onClose"
    position="bottom"
    aria-modal="true"
  >
    <div :class="`${name}__panel`">
      <div v-if="title || $slots.title" :class="`${name}__title`">
        <slot name="title">
          <p :class="`${name}__title-text`">{{ title }}</p>
        </slot>
      </div>
      <div
        :class="{
          [`${name}__menu`]: true,
          [`${name}__safe-area`]: !showCancel && index === actionItems.length - 1
        }"
        role="button"
        v-for="(item, index) in actionItems"
        :key="item.key || index"
        :aria-label="item.selected ? `${item.text}已选中` : ''"
        @click="onSelect(index)"
      >
        <div :class="`${name}__cell`" :aria-hidden="item.selected">
          <slot name="item" :data="{item, index}">
            <div :class="`${name}__cell-text`" :style="{color: item.color}">{{ item.text }}</div>
          </slot>
          <Check :class="`${name}__cell-checked`" size="20px" v-if="item.selected && showSelectIcon" />
        </div>
      </div>
      <div v-if="showCancel" role="button" :class="[`${name}__action`, `${name}__safe-area`]" @click="onCancel">
        <div :class="`${name}__cell`">{{ cancelText || $locale.translate('cancel') }}</div>
      </div>
    </div>
  </v-popup>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue';
import { Check } from 'vion-svg-icon';
import { simpleClone } from '../utils';
import VPopup from '../popup';
import { prefix } from '../config';

const name = `${prefix}-action-sheet`;

export default defineComponent({
  name,
  components: { VPopup, Check },
  props: {
    modelValue: Boolean,
    /**
     * @description 是否显示
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * @description 将popup放在哪个el下，该el在createApp前必须存在
     * @attribute to
     */
    to: {
      type: String,
      default: 'body'
    },
    /**
     * @description 是否禁用teleport
     * @attribute teleport-disabled
     */
    teleportDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 菜单项
     * @attribute items
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * @description 标题
     * @attribute title
     */
    title: String,
    /**
     * @description 是否展示【取消】选项
     * @attribute show-cancel
     */
    showCancel: {
      type: Boolean,
      dafault: true
    },
    /**
     * @description 【取消】选项的文本
     * @attribute cancel-text
     */
    cancelText: String,
    /**
     * @description 是否展示选中后的图标
     * @attribute show-select-icon
     */
    showSelectIcon: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select', 'cancel', 'close', 'update:modelValue'],
  setup(props, ctx) {
    const actionItems = ref([]);
    const currentVisible = computed(() => props.modelValue || props.visible);

    watch(() => props.items, (items) => {
      let formatItems = simpleClone(items);
      // 数据格式处理，统一转为object结构
      formatItems = formatItems.map((item) => {
        if (typeof item === 'string') {
          return { text: item, selected: false };
        }

        return { ...item, selected: item.selected || false };
      });
      actionItems.value = formatItems;
    }, {
      immediate: true,
      deep: true
    });

    const onSelect = (index) => {
      ctx.emit('select', props.items[index], index);
    };

    const onCancel = () => {
      ctx.emit('cancel');
      ctx.emit('update:modelValue', false);
    };

    const onClose = () => {
      ctx.emit('close');
      ctx.emit('update:modelValue', false);
    };

    return {
      name,
      actionItems,
      currentVisible,
      onSelect,
      onCancel,
      onClose,
    };
  }
});
</script>
