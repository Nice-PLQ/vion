<template>
  <div :class="name">
    <ul :class="`${name}__list`">
      <li
        v-for="(node, index) in tabbarItems"
        :key="index"
        @click="(e) => onClick(index, e)"
        :class="{
          [`${name}-item`]: true,
          on: index === currentValue,
        }"
      >
        <component
          :is="node"
          :active-color="activeColor"
          :inactive-color="inactiveColor"
        ></component>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent, provide } from 'vue';
import { getChildFromSlot } from '../utils';
import { prefix } from '../config';

const name = `${prefix}-tabbar`;
export default defineComponent({
  name,
  props: {
    modelValue: Number,
    /**
     * @description 当前选中的tab索引
     * @attribute value
     */
    value: {
      type: Number,
      default: 0,
    },
    /**
     * @description 选中时的颜色
     * @attribute active-color
     */
    activeColor: String,
    /**
     * @description 未选中时的颜色
     * @attribute inactive-color
     */
    inactiveColor: String,
  },
  emits: ['change', 'click', 'update:modelValue'],
  setup(props, ctx) {
    const currentValue = computed(() => props.modelValue || props.value);
    provide('currentValue', currentValue);

    const tabbarItems = computed(() => {
      const vnodes = ctx.slots.default ? ctx.slots.default() : [];
      return getChildFromSlot(vnodes, `${name}-item`).map((node, index) => {
        node.props = node.props || {};
        node.props.index = index;
        if (props.activeColor || props.nactiveColor) {
          node.props.activeColor = props.activeColor;
          node.props.inactiveColor = props.inactiveColor;
        }
        return node;
      });
    });

    const onClick = (index, event) => {
      ctx.emit('update:modelValue', index);
      ctx.emit('change', index, event);
      ctx.emit('click', event);
    };

    return {
      name,
      currentValue,
      tabbarItems,
      onClick,
    };
  },
});
</script>
