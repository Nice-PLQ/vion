<template>
  <div
    :class="{
      [`${name}`]: true,
      [`${name}_${size}`]: true,
      [`${name}_outline`]: shape === 'outline',
    }"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-tag`;
export default defineComponent({
  name,
  props: {
    /**
     *  @description 背景色
     * @attribute background-color
     */
    bgColor: String,
    /**
     * @description 文本颜色
     * @attribute text-color
     */
    textColor: String,
    /**
     * @description 大小
     * @attribute size
     * @enum ["medium", "small", "large"]
     * @default medium
     */
    size: {
      type: String,
      default: 'medium',
      validator: val => ['medium', 'small', 'large'].indexOf(val) !== -1
    },
    /**
     * @description 形状
     * @attribute shape
     * @enum ["fill", "outline"]
     * @default medium
     */
    shape: {
      type: String,
      default: 'fill',
      validator: val => ['fill', 'outline'].indexOf(val) !== -1
    },
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
