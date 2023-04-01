<template>
  <div :class="rootClass">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';
import { prefix } from '../config';
const name = `${prefix}-tab-panel`;
export default defineComponent({
  name,
  props: {
    /**
     * @description tab标题
     * @attribute title
     */
    title: String,

    /**
     * @description 标签名称，作为匹配的标识符
     * @attribute name
     */
    name: String
  },
  setup(props) {
    const addTab = inject('addTab', () => {});
    addTab({
      title: props.title,
      name: props.name
    });

    return {
      rootClass: `${prefix}-tab__panel`
    };
  }
});
</script>
