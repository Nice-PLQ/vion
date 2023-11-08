<template>
  <svg :class="`${name}__circle`" height="56" width="56">
    <circle
      cx="28"
      cy="28"
      r="25"
      fill="transparent"
    />
    <circle
      :class="`${name}__circle-stroke`"
      cx="28"
      cy="28"
      r="25"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      :stroke-linecap="ratio > 0 ? 'round' : 'butt'"
      :stroke-dasharray="`${loadingRatio},10000`"
    />
    <text x="50%" y="52%" :class="`${name}__circle-text`">{{ ratio }}%</text>
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-progress`;

export default defineComponent({
  props: {
    ratio: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const loadingRatio = computed(
      () => (Math.floor(2 * Math.PI * 25) * props.ratio) / 100
    );

    return {
      name,
      loadingRatio,
    };
  },
});
</script>
