<template>
  <div :class="name" @click="onClick">
    <div
      :class="{
        [`${name}__icon`]: true,
        [`${name}_checked`]: isChecked,
        [`${name}_disabled`]: isDisabled,
        [`${name}_square`]: shape === 'square',
      }"
      :style="{
        fontSize: size,
        borderColor: isChecked ? checkedColor : null,
        backgroundColor: isChecked ? checkedColor : null
      }"
    >
      <input type="checkbox" :checked="isChecked" :class="`${name}__input`" ref="checkboxInput" />
      <span v-if="isChecked && count !== undefined" :class="`${name}__number`">{{ count }}</span>
      <check v-else-if="isChecked" />
    </div>
    <span :class="`${name}__label`" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { defineComponent, ref, computed, inject } from 'vue';
import Check from './check.vue';
import { prefix } from '../config';

const name = `${prefix}-checkbox`;

export default defineComponent({
  name,
  components: { Check },
  props: {
    modelValue: Boolean,
    /**
     * @description value值
     * @attribute value
     */
    value: {
      type: String,
      default: ''
    },
    /**
     * @description 是否选中
     * @attribute checked
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否禁用
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否只读
     * @attribute readonly
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * @description 多选框大小
     * @attribute size
     */
    size: String,
    /**
     * @description 选中后的背景色
     * @attribute checked-color
     */
    checkedColor: String,
    /**
     * @description 多选框形状
     * @attribute shape
     * @enum ["circle", "square"]
     * @default circle
     */
    shape: {
      type: String,
      default: 'circle',
      validator: val => ['circle', 'square'].indexOf(val) !== -1
    },
    /**
     * @description 多选框的数值
     * @attribute count
     */
    count: Number,
  },
  emits: ['click', 'change', 'update:modelValue'],
  setup(props, ctx) {
    const groupValue = inject('groupValue', undefined);
    const groupDisabled = inject('groupDisabled', undefined);
    const groupReadonly = inject('groupReadonly', undefined);
    const groupChangeValue = inject('groupChangeValue', () => {});

    const checkboxInput = ref(null);
    const currentChecked = computed(() => props.modelValue || props.checked);

    const isChecked = computed(() => {
      if (groupValue) {
        return groupValue.value.includes(props.value);
      }
      return currentChecked.value;
    });

    const isDisabled = computed(() => groupDisabled || props.disabled);

    const isReadonly = computed(() => groupReadonly || props.readonly);

    const onClick = (event) => {
      if (isDisabled.value || isReadonly.value) {
        return;
      }

      const { checked } = checkboxInput.value;
      ctx.emit('click', event);
      ctx.emit('change', checked);
      ctx.emit('update:modelValue', checked);

      if (groupChangeValue) {
        groupChangeValue(props.value);
      }
    };

    return {
      name,
      checkboxInput,
      currentChecked,
      isChecked,
      isDisabled,
      onClick,
    };
  },
});
</script>
