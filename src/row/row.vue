<template>
  <div :class="[
    name,
    `${name}_justify-${justify}`,
    `${name}_align-${align}`,
    `${name}_${wrap}`
  ]">
    <component :is="colSlots"></component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getChildFromSlot } from '../utils';
import { prefix } from '../config';

const name = `${prefix}-row`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 水平主轴对齐方式
     * @attribute justify
     * @enum ["start", "center", "end", "space-between", "space-around"]
     * @default start
     */
    justify: {
      type: String,
      default: 'start',
      validator: val => ['start', 'center', 'end', 'space-between', 'space-around'].indexOf(val) !== -1
    },
    /**
     * @description 垂直交叉轴对齐方式
     * @attribute justify
     * @enum ["top", "center", "bottom", "stretch"]
     * @default top
     */
    align: {
      type: String,
      default: 'top',
      validator: val => ['top', 'center', 'bottom', 'stretch'].indexOf(val) !== -1

    },
    /**
     * @description 列的间距
     * @attribute gutter
     */
    gutter: [Number, String],
    /**
     * @description 超出容器宽度时是否需要换行
     * @attribute wrap
     * @enum ["wrap", "no-wrap", "wrap-reverse"]
     * @default no-wrap
     */
    wrap: {
      type: String,
      default: 'no-wrap',
      validator: val => ['wrap', 'no-wrap', 'wrap-reverse'].indexOf(val) !== -1
    }
  },
  setup(props, ctx) {
    const vnodes = ctx.slots.default ? ctx.slots.default() : [];
    const colSlots = () => getChildFromSlot(vnodes, `${prefix}-col`).map((node, index) => {
      if (index !== 0 && props.gutter) {
        node.props.gutter = `${props.gutter}px`;
      }
      return node;
    });

    return {
      name,
      colSlots
    };
  }
});
</script>
