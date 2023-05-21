<template>
  <button
    :disabled="disabled || loading"
    :class="{
      [`${name}`]: true,
      [`${name}_${type}`]: true,
      [`${name}_loading`]: loading,
      [`${name}_${size}`]: type !== 'link',
      [`${name}_link_small`]: type === 'link' && size === 'small'
    }"
    @click="onClick"
  >
    <div :class="`${name}__inner`">
      <v-loading v-if="loading" />
      <slot></slot>
    </div>
  </button>
</template>

<script>
import { defineComponent } from 'vue';
import VLoading from '../loading';
import { prefix } from '../config';

const name = `${prefix}-button`;

export default defineComponent({
  name,
  components: { VLoading },
  props: {
    /**
     * @description 按钮类型
     * @attribute type
     * @enum ["default", "primary", "warning", "gray", "link"]
     * @default default
     */
    type: {
      type: String,
      default: 'default',
      validator: val => ['default', 'primary', 'warning', 'gray', 'link'].indexOf(val) !== -1
    },
    /**
     * @description 按钮大小
     * @attribute size
     * @enum ["large", "medium", "small"]
     * @default medium
     */
    size: {
      type: String,
      default: 'medium',
      validator: val => ['large', 'medium', 'small'].indexOf(val) !== -1
    },
    /**
     * @description 是否为loading态按钮
     * @attribute loading
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否禁用按钮
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    return {
      name,
      onClick: e => ctx.emit('click', e),
    };
  }
});
</script>
