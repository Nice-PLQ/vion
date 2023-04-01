<template>
  <div
    :class="{
      [`${name}`]: true,
      [`${name}_span-${span}`]: true,
      [`${name}_offset-${offset}`]: offset
    }"
    :style="{paddingLeft: gutter}"
  >
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-col`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 列的栅格宽度
     * @attribute span
     */
    span: [Number, String],
    /**
     * @description 列的栅偏移量
     * @attribute offset
     */
    offset: [Number, String],
    /**
     * 组件内部属性
     */
    gutter: [Number, String]
  },
  setup() {
    return { name };
  }
});
</script>
