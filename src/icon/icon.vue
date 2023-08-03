
<template>
  <component :class="rootClass" :is="icon" :size="size" :color="color" @click="onClick" />
</template>

<script>
import { defineComponent, computed } from 'vue';
import * as VIcon from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-icon`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 图标名称
     * @attribute name
     */
    name: String,
    /**
     * @description 图标颜色
     * @attribute color
     */
    color: String,
    /**
     * @description 图标大小
     * @attribute size
     */
    size: String,
  },
  emits: ['click'],
  setup(props, ctx) {
    const icon = computed(() => VIcon[props.name]);
    return {
      icon,
      rootClass: name,
      onClick: e => ctx.emit('click', e),
    };
  },
});
</script>
