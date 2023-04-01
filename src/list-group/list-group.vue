<template>
  <div v-if="title" :class="`${name}_title`">{{ title }}</div>
  <div :class="rootClass">
    <slot></slot>
  </div>
  <div v-if="extra" :class="`${name}_extra`">{{ extra }}</div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-list-group`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 是否显示列表项的边框
     * @attribute border
     */
    border: {
      type: Boolean,
      default: true
    },
    /**
     * @description 列表组顶部的标题说明
     * @attribute title
     */
    title: String,
    /**
     * @description 列表组底部附加说明
     * @attribute extra
     */
    extra: String,
  },
  setup(props, ctx) {
    const rootClass = computed(() => ({
      [`${name}`]: true,
      [`${prefix}-list_border_none`]: !props.border,
      [`${prefix}-list-group_had_extra`]: props.extra
    }));

    return {
      name,
      rootClass
    };
  }
});
</script>
