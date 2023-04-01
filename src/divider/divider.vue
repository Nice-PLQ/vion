<template>
  <div :class="{
    [`${name}`]: true,
    [`${name}_lighter`]: type === 'lighter',
    [`${name}_bold`]: type === 'bold',
  }"
    :style="{
      background: color,
      height,
    }"
  >
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-divider`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 分割线的颜色
     * @attribute color
     */
    color: String,
    /**
     * @description 分割线的类型
     * @attribute type
     * @enum ["lighter", "bold"]
     * @default lighter
     */
    type: {
      type: String,
      default: 'lighter',
      validator: val => ['lighter', 'bold'].indexOf(val) !== -1
    },
    /**
     * @description 分割线高度
     * @attribute height
     */
    height: String,
  },
  setup(props, ctx) {
    return {
      name,
    };
  }
});
</script>
