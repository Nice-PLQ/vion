<template>
  <div
    :class="{
      [`${name}`]: true,
      [`${name}_checked`]: currentChecked,
      [`${name}_disabled`]: disabled,
    }"
    :style="style"
    role="switch"
    :aria-checked="`${currentChecked}`"
    @click="onClick"
  ></div>
</template>

<script>
import { computed, defineComponent, reactive, watch } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-switch`;

export default defineComponent({
  name,
  props: {
    modelValue: Boolean,
    /**
     * @description 是否禁用
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否开启
     * @attribute checked
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * @description switch大小
     * @attribute size
     */
    size: String,
    /**
     * @description 开关开启后的颜色
     * @attribute active-color
     */
    activeColor: String,
    /**
     * @description 开关关闭后的颜色
     * @attribute inactive-color
     */
    inactiveColor: String,
  },
  emits: ['update:modelValue', 'click', 'change'],
  setup(props, ctx) {
    const currentChecked = computed(() => props.modelValue || props.checked);

    const style = reactive({
      fontSize: props.size,
      backgroundColor: currentChecked.value ? props.activeColor : props.inactiveColor
    });

    watch(
      currentChecked,
      (val) => {
        style.backgroundColor = val ? props.activeColor : props.inactiveColor;
      }
    );

    const onClick = (event) => {
      if (props.disabled) return;
      ctx.emit('click', event);
      ctx.emit('change', !currentChecked.value);
      ctx.emit('update:modelValue', !currentChecked.value);
    };

    return {
      name,
      style,
      onClick,
      currentChecked
    };
  }
});
</script>
