<template>
  <div :class="`${prefix}-swiper__item-inner`">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-swiper-item`;
export default defineComponent({
  name,
  setup() {
    return { prefix };
  }
});
</script>
