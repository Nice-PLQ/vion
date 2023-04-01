<template>
  <div :class="{
    [`${name}`]: true,
    [`${name}_vertical`]: vertical
    }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed, provide } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-checkbox-group`;

export default defineComponent({
  name,
  props: {
    modelValue: Array,
    /**
     * @description value值
     * @attribute value
     */
    value: {
      type: Array,
      default: () => []
    },
    /**
     * @description 是否禁用所有的checkbox
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否设置所有的多选框为只读状态
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

    const changeValue = (val) => {
      let nextValue;
      if (!currentValue.value.includes(val)) {
        nextValue = [...currentValue.value, val];
      } else {
        nextValue = currentValue.value.filter(item => item !== val);
      }

      ctx.emit('change', nextValue);
      ctx.emit('update:modelValue', nextValue);
    };

    provide('groupValue', currentValue);
    provide('groupDisabled', props.disabled);
    provide('groupReadonly', props.readonly);
    provide('groupChangeValue', changeValue);

    return {
      name,
    };
  },
});
</script>
