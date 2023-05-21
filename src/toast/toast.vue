<template>
  <transition name="toast" @after-leave="afterLeave">
    <div
      v-show="visible"
      :class="name"
    >
      <div :class="`${name}__inner`">
        <component :is="iconType" :class="`${name}-${type}`" size="27.5px" />
        <div :class="`${name}__txt`">{{message}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, watch, computed } from 'vue';
import { CheckFilled, InfoFilled, WarningFilled } from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-toast`;

export default defineComponent({
  name,
  components: { CheckFilled, InfoFilled, WarningFilled },
  props: {
    /**
     * @description 是否可见
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * @description 提示的文本
     * @attribute message
     */
    message: String,
    /**
     * @description toast类型
     * @attribute type
     * @enum ["success", "error", "info"]
     * @default success
     */
    type: {
      type: String,
      default: 'success',
      validator: val => ['success', 'error', 'info'].indexOf(val) !== -1
    },
    /**
     * @description 隐藏的时间
     * @attribute duration
     */
    duration: {
      type: Number,
      default: 1500
    },
  },
  emits: ['close', 'closed'],
  setup(props, ctx) {
    const iconType = computed(() => {
      const { type } = props;
      let icon = InfoFilled;

      if (type === 'success') {
        icon = CheckFilled;
      }

      if (type === 'error') {
        icon = WarningFilled;
      }
      return icon;
    });

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          setTimeout(() => ctx.emit('close'), props.duration);
        }
      }
    );

    const afterLeave = () => ctx.emit('closed');

    return {
      name,
      iconType,
      afterLeave,
    };
  },
});
</script>
