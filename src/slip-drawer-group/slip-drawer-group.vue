<template>
  <div :class="name">
    <component :is="items"></component>
  </div>
</template>

<script>
import { defineComponent, provide, ref } from 'vue';
import { getChildFromSlot } from '../utils';
import { prefix } from '../config';

const name = `${prefix}-slip-drawer-group`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 是否禁用
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const activeIndex = ref(-1);
    const vnodes = ctx.slots.default ? ctx.slots.default() : [];
    const items = () => getChildFromSlot(vnodes, `${prefix}-slip-drawer`).map((node, index) => {
      node.props = { ...node.props, disabled: props.disabled, index };
      return node;
    });

    const reset = (index) => {
      activeIndex.value = index;
    };

    provide('groupActiveIndex', activeIndex);
    provide('groupReset', reset);

    return {
      name,
      items,
      reset,
    };
  }
});
</script>
