<template>
  <div :class="{
    [`${name}`]: true,
    [`${name}_vertical`]: vertical
    }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed, ref, provide } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-radio-group`;

export default defineComponent({
  name,
  props: {
    modelValue: [String, Number],
    /**
     * @description value值
     * @attribute value
     */
    value: {
      type: [String, Number],
      default: ''
    },
    /**
     * @description 是否禁用所有的radio
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否设置所有的单选框为只读状态
     * @attribute readonly
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否纵向排列
     * @attribute vertical
     */
    vertical: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, ctx) {
    const currentValue = computed(() => props.modelValue || props.value);

    const changeValue = (nextValue) => {
      ctx.emit('change', nextValue);
      ctx.emit('update:modelValue', nextValue);
    };

    provide('groupValue', currentValue);
    provide('groupDisabled', props.disabled);
    provide('groupReadonly', props.readonly);
    provide('groupChangeValue', changeValue);

    return {
      name: ref(name),
    };
  },
});
</script>
