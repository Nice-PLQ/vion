<template>
  <teleport :to="to" :disabled="teleportDisabled">
    <div :class="{[`${name}`]: currentVisible}" @touchmove="onTouchmove" v-bind="$attrs">
      <transition name="fade">
        <div
          v-show="currentVisible && maskVisible"
          role="button"
          aria-label="关闭"
          :class="`${name}__mask`"
          @click="onOverlayClick"
          @touchmove.prevent
        ></div>
      </transition>
      <transition name="fade">
        <div :class="`${name}__mask-content`" v-if="$slots.maskContent && currentVisible">
          <slot name="maskContent"></slot>
        </div>
      </transition>
      <transition
        :name="contentTransitionName"
        @enter="enter"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div v-show="currentVisible" :class="[`${name}__content`, `${name}__content_${position}`]">
          <slot></slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import { defineComponent, watch, computed, onUnmounted } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-popup`;

export default defineComponent({
  name,
  props: {
    modelValue: Boolean,
    /**
     * @description 是否显示
     * @attribute visible
     */
    visible: Boolean,
    /**
     * @description 将popup放在哪个el下，该el在createApp前必须存在
     * @attribute to
     */
    to: {
      type: String,
      default: 'body'
    },
    /**
     * @description 是否禁用teleport
     * @attribute teleport-disabled
     */
    teleportDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否显示遮罩
     * @attribute mask-visible
     */
    maskVisible: {
      type: Boolean,
      default: true
    },
    /**
     * @description 点击遮罩是否关闭弹窗
     * @attribute mask-click-close
     */
    maskClickClose: {
      type: Boolean,
      default: true
    },
    /**
     * @description 是否锁定内容滚动
     * @attribute lock-scroll
     */
    lockScroll: {
      type: Boolean,
      default: true
    },
    /**
     * @description 弹出层的位置
     * @attribute position
     * @enum ["top", "right", "bottom", "left", "center"]
     * @default bottom
     */
    position: {
      type: String,
      default: 'bottom',
      validator: val => ['top', 'right', 'bottom', 'left', 'center'].indexOf(val) !== -1
    },
    /**
     * @description 弹出层内容区的动画名，等价于transition组件的name属性
     * @attribute transition-name
     */
    transitionName: String
  },
  emits: ['open', 'opened', 'close', 'closed', 'update:modelValue'],
  setup(props, ctx) {
    const currentVisible = computed(() => props.modelValue || props.visible);
    const contentTransitionName = computed(() => {
      const { transitionName, position } = props;
      if (transitionName) return transitionName;
      if (position === 'center') return 'fade-zoom';
      return `slide-${position}`;
    });

    const overflowClass = `${prefix}-overflow-hidden`;

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          document.body.classList.add(overflowClass);
        } else {
          document.body.classList.remove(overflowClass);
        }
      }
    );

    onUnmounted(() => {
      document.body.classList.remove(overflowClass);
    });

    const onOverlayClick = () => {
      if (!props.maskClickClose) {
        return;
      }
      ctx.emit('update:modelValue', false);
      ctx.emit('close');
    };
    const onTouchmove = e => props.lockScroll && e.preventDefault();

    const enter = () => ctx.emit('open');
    const afterEnter = () => ctx.emit('opened');
    const afterLeave = () => ctx.emit('closed');

    return {
      name,
      currentVisible,
      contentTransitionName,
      onOverlayClick,
      onTouchmove,
      enter,
      afterEnter,
      afterLeave,
    };
  },
});
</script>
