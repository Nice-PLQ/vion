<template>
  <transition
    :name="type === 'float' ? 'loading-fade' : ''"
    @after-leave="afterLeave"
  >
    <div
      v-if="visible"
      :class="{
        [`${name}`]: true,
        [`${name}_${type}`]: true,
      }"
      :style="{color}"
    >
      <div :class="`${name}__inner`">
        <div :class="[`${name}__icon`]" :style="{ fontSize: size }"></div>
        <span :class="`${name}__txt-tips`" v-if="type === 'float'">
          {{ text }}
        </span>
        <span :class="`${name}__txt-tips`" v-else-if="$slots.default">
          <slot></slot>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, watch } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-loading`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 是否可见
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: true,
    },
    /**
     * @description loading类型
     * @attribute type
     * @enum ["normal", "float"]
     * @default normal
     */
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'float'].indexOf(value) !== -1,
    },
    /**
     * @description 文案
     * @attribute text
     */
    text: String,
    /**
     * @description 大小
     * @attribute size
     */
    size: String,
    /**
     * @description loading的颜色
     * @attribute color
     */
    color: String,
    /**
     * @description loading显示时长
     * @attribute duration
     */
    duration: {
      type: Number,
      default: 0,
    },
  },
  emits: ['closed', 'close'],
  setup(props, ctx) {
    watch(
      () => props.visible,
      (val) => {
        if (val && props.duration > 0) {
          setTimeout(() => ctx.emit('close'), props.duration);
        }
      }
    );

    const afterLeave = () => {
      if (props.type === 'float') {
        ctx.emit('closed');
      }
    };

    return {
      name,
      afterLeave,
    };
  },
});
</script>
