<template>
  <div
    :class="{
      [`${name}`]: true,
      [`${name}_dot`]: type === 'dot',
      [`${name}_capsule`]: type === 'capsule'
    }"
    :style="{
      backgroundColor,
      color: textColor,
      fontSize: size
    }"
    @click="onClick"
  >
    <span v-if="$slots.default" :class="`${name}__number`">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-badge`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 背景色
     * @attribute background-color
     */
    backgroundColor: String,
    /**
     * @description 文本颜色
     * @attribute text-color
     */
    textColor: String,
    /**
     * @description 大小
     * @attribute size
     */
    size: String,
    /**
     * @description 类型
     * @attribute type
     * @enum ["dot", "normal", "capsule"]
     * @default normal
     */
    type: {
      type: String,
      default: 'normal',
      validator: val => ['dot', 'normal', 'capsule'].indexOf(val) !== -1
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
