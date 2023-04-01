<template>
  <div :class="{
    [`${name}`]: true,
    [`${prefix}-input_border`]: border,
    [`${prefix}-input_circle`]: circle
  }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-input-group`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 输入框标题对齐方式
     * @attribute label-align
     * @enum ["left", "center", "right"]
     */
    labelAlign: {
      type: String,
      validator: val => ['left', 'center', 'right'].indexOf(val) !== -1
    },
    /**
     * @description 输入框标题宽度
     * @attribute label-width
     */
    labelWidth: String,
    /**
     * @description 输入框之间的边框
     * @attribute space
     */
    border: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否圆角
     * @attribute circle
     */
    circle: {
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
    }
  },
  setup(props) {
    provide('groupLabelAlign', props.labelAlign);
    provide('groupLabelWidth', props.labelWidth);
    provide('groupReadonly', props.readonly);
    provide('groupCircle', false);

    return {
      name,
      prefix,
    };
  }
});
</script>
