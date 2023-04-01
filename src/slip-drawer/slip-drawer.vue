<template>
  <div :class="name">
    <div
      :class="`${name}__wrapper`"
      @touchstart.stop="onTouchStart"
      @touchmove.stop="onTouchMove"
      @touchend.stop="onTouchEnd"
      @transitionend="onTransitionEnd"
      :style="{
        transform: `translate3d(${moveOffset}px, 0, 0)`,
        transition: useTransition ? 'transform .4s' : null
      }"
    >
      <div
        :class="`${name}__action ${name}__action-left`"
        ref="leftRef"
        @touchmove.stop
        @touchend.stop
      >
        <slot name="left">
          <button
            :class="`${name}__action-btn`"
            v-for="(item, index) in leftItems"
            :key="index"
            :style="item.style"
            @click.stop="onLeftClick(index)"
          >{{item.text}}</button>
        </slot>
      </div>
      <div :class="`${name}__content`">
        <slot></slot>
      </div>
      <div
        :class="`${name}__action ${name}__action-right`"
        ref="rightRef"
        @touchmove.stop
        @touchend.stop
      >
        <slot name="right">
          <button
            :class="`${name}__action-btn`"
            v-for="(item, index) in rightItems"
            :key="index"
            :style="item.style"
            @click.stop="onRightClick(index)"
          >{{item.text}}</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch, inject } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-slip-drawer`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 是否禁用
     * @attribute disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 允许滑动的偏移量
     * @attribute offset
     */
    offset: {
      type: Number,
      default: 15
    },
    /**
     * @description 左侧的操作项
     * @attribute left-items
     */
    leftItems: {
      type: Array,
      default: () => [],
    },
    /**
     * @description 右侧的操作项
     * @attribute right-items
     */
    rightItems: {
      type: Array,
      default: () => [],
    },
    /**
     * 在组合时的索引，内部私有
     */
    index: Number
  },
  emits: ['left-click', 'right-click', 'opened', 'closed'],
  setup(props, ctx) {
    const opened = ref(false);
    const moveOffset = ref(0);
    const useTransition = ref(false);
    const leftRef = ref(null);
    const rightRef = ref(null);

    const canMove = computed(() => !props.disabled && (leftRef.value.offsetWidth || rightRef.value.offsetWidth));

    const groupReset = inject('groupReset', () => {});
    const groupActiveIndex = inject('groupActiveIndex', ref(-1));

    watch(groupActiveIndex, (index) => {
      if (index !== props.index) {
        moveOffset.value = 0;
        useTransition.value = true;
        opened.value = false;
      }
    });

    let leftOffsetWidth, rightOffsetWidth, startX, moving;
    const onTouchStart = (event) => {
      if (!canMove.value) return;

      useTransition.value = false;
      leftOffsetWidth = leftRef.value.offsetWidth;
      rightOffsetWidth = rightRef.value.offsetWidth;
      startX = event.touches[0].clientX - moveOffset.value;

      groupReset(props.index);
    };

    const onTouchMove = (event) => {
      if (!canMove.value) return;

      let moveX = event.touches[0].clientX - startX;

      if (Math.abs(moveX) < props.offset && !moving) return;

      moving = true;
      if (moveX < 0 && Math.abs(moveX) >= rightOffsetWidth) {
        moveX = rightOffsetWidth * -1;
      }

      if (moveX > 0 && moveX >= leftOffsetWidth) {
        moveX = leftOffsetWidth;
      }

      moveOffset.value = moveX;
    };

    const onTouchEnd = () => {
      moving = false;
      if (!canMove.value) return;

      if (Math.abs(moveOffset.value) < props.offset) {
        opened.value = false;
      } else {
        useTransition.value = true;
        // eslint-disable-next-line no-nested-ternary
        moveOffset.value = opened.value ? 0 : (moveOffset.value < 0 ? rightOffsetWidth * -1 : leftOffsetWidth);
        opened.value = !opened.value;
      }
    };

    const onLeftClick = index => ctx.emit('left-click', index);
    const onRightClick = index => ctx.emit('right-click', index);
    const onTransitionEnd = () => ctx.emit(opened.value ? 'opened' : 'closed');

    return {
      name,
      opened,
      moveOffset,
      useTransition,
      leftRef,
      rightRef,
      onLeftClick,
      onRightClick,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTransitionEnd,
    };
  }
});
</script>
