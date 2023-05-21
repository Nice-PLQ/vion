<template>
  <div :class="classObject">
    <transition :name="animation && `tooltips-${ isTop ? 'top' : 'bottom'}`">
      <div
        ref="tooltips"
        :class="`${name}__inner`"
        v-show="visible"
        :style="styleObject"
        @click.stop="$emit('click')"
      >
        <slot name="content">
          <div :class="`${name}__txt-tips`">{{text}}</div>
        </slot>
      </div>
    </transition>
    <span ref="slot">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watch, nextTick } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-tooltips`;
export default defineComponent({
  name,
  emits: ['visible-change', 'click'],
  props: {
    /**
     * @description 气泡位置
     * @attribute placement
     * @enum ["top-center", "top-left", "top-right", "bottom-center", "bottom-left", "bottom-right"]
     * @default top-center
     */
    placement: {
      type: String,
      default: 'top-center',
      validator: val => [
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-left',
        'bottom-right'
      ].indexOf(val) !== -1
    },
    /**
     * @description 提示内容
     * @attribute text
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * @description 是否可见
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否需要动效
     * @attribute animation
     */
    animation: {
      type: Boolean,
      default: true
    }
  },
  setup(props, ctx) {
    const isTop = computed(() => props.placement.includes('top'));
    const isLeft = computed(() => props.placement.includes('left'));
    const isRight = computed(() => props.placement.includes('right'));
    const isCenter = computed(() => props.placement.includes('center'));
    const classObject = computed(() => {
      let position = `${name}__`;
      position += isTop.value ? 'bottom' : 'top';
      if (isLeft.value) position += '-left';
      if (isRight.value) position += '-right';
      if (isCenter.value) position += '-center';

      // 追加主题相关class
      return [name, position];
    });

    const offsetTopHeight = ref(0);
    const offsetBottomHeight = ref(0);
    const offsetCenter = ref(0);
    const offsetLeft = ref(0);
    const offsetRight = ref(0);
    const styleObject = computed(() => {
      const top = isTop.value
        ? `${offsetBottomHeight.value}px`
        : `${offsetTopHeight.value}px`;

      let left;
      if (isLeft.value) left = `${offsetLeft.value}px`;
      if (isRight.value) left = `${offsetRight.value}px`;
      if (isCenter.value) left = `${offsetCenter.value}px`;

      return { left, top };
    });

    const tooltips = ref(null);
    const slot = ref(null);

    const calPosition = () => {
      if (!slot.value) return;
      const element = slot.value.children[0];

      offsetCenter.value = element.offsetLeft + element.clientWidth / 2 - tooltips.value.clientWidth / 2;

      offsetLeft.value = element.offsetLeft;

      offsetRight.value =
        element.offsetLeft +
        element.clientWidth -
        tooltips.value.clientWidth;

      offsetTopHeight.value = element.clientHeight + element.offsetTop + 4;

      offsetBottomHeight.value =
        element.offsetTop - tooltips.value.clientHeight - 4;
    };

    watch(() => props.visible, (newValue) => {
      ctx.emit('visible-change', newValue);
      if (newValue) {
        nextTick(() => {
          calPosition();
        });
      }
    });

    onMounted(() => {
      calPosition();
    });
    return {
      name,
      isTop,
      classObject,
      tooltips,
      slot,
      styleObject
    };
  }
});

</script>
