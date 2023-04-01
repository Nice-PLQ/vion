<template>
  <div :class="`${name}__content`" :style="{color}">
    <div :class="`${name}__icon`">
      <slot name="icon"></slot>
      <v-badge type="dot" v-if="badge === true" />
      <v-badge type="capsule" v-else-if="badge">{{badge}}</v-badge>
    </div>
    <div :class="`${name}__text`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, inject, computed } from 'vue';
import VBadge from '../badge';
import { prefix } from '../config';

const name = `${prefix}-tabbar-item`;
export default defineComponent({
  name,
  components: { VBadge },
  props: {
    /**
     * @description 红点或徽章
     * @attribute badge
     */
    badge: [Number, String, Boolean],
    /**
     * @description 选中后的颜色
     * @attribute active-color
     */
    activeColor: String,
    /**
     * @description 未选中时的颜色
     * @attribute inactive-color
     */
    inactiveColor: String,
    /**
     * 内部私有
     */
    index: Number
  },
  setup(props) {
    const currentValue = inject('currentValue', ref(0));
    // eslint-disable-next-line no-confusing-arrow
    const color = computed(() => currentValue.value === props.index ? props.activeColor : props.inactiveColor);

    return {
      name,
      color,
    };
  }
});
</script>
