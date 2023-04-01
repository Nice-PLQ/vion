<template>
  <div :class="name">
    <component :is="btnSlots"></component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getChildFromSlot } from '../utils';
import { prefix } from '../config';

const name = `${prefix}-button-group`;

export default defineComponent({
  name,
  setup(props, ctx) {
    const vnodes = ctx.slots.default ? ctx.slots.default() : [];
    const btnSlots = () => getChildFromSlot(vnodes, `${prefix}-button`).map((node) => {
      node.props = { ...(node.props || {}), size: 'large' }; // 按钮组时，默认使用大号按钮
      return node;
    });

    return {
      name,
      btnSlots
    };
  },
});
</script>
