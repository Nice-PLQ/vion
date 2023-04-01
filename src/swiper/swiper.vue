<template>
  <div :class="name" ref="container">
    <ul
      :class="`${name}__list`"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      @transitionend="onTransitionend"
      :style="listStyle"
    >
      <li
      :class="`${name}__item`"
      v-for="(node, index) in swiperList"
      :key="index">
        <component :is="node"></component>
      </li>
    </ul>
    <slot name="indicator" v-if="showIndicators && canSwiper">
      <ul :class="`${name}__indicator`">
        <li
          v-for="(node, index) in defaultSwiperList"
          :key="index"
          :style="{
            backgroundColor: indicatorColor
          }"
          :class="{
            [`${name}__indicator-item`]: true,
            on: index === activeIndex - 1
          }"
        ></li>
        </ul>
    </slot>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { getChildFromSlot } from '../utils';
import { prefix } from '../config';

const name = `${prefix}-swiper`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 动画时长
     * @attribute duration
     */
    duration: {
      type: [Number, String],
      default: 500
    },
    /**
     * @description 是否自动轮播
     * @attribute auto-play
     */
    autoPlay: {
      type: Boolean,
      default: false
    },
    /**
     * @description 轮播时间间隔
     * @attribute interval
     */
    interval: {
      type: Number,
      default: 3000
    },
    /**
     * @description 是否显示指示器
     * @attribute show-indicators
     */
    showIndicators: {
      type: Boolean,
      default: true
    },
    /**
     * @description 指示器的颜色
     * @attribute indicator-color
     */
    indicatorColor: String,
    /**
     * @decription 无限循环
     * @attribute loop
     */
    loop: {
      type: Boolean,
      default: true,
    }
  },
  emits: ['change'],
  setup(props, ctx) {
    const container = ref(null);
    const defaultSwiperList = ref([]);
    const swiperList = ref([]);
    const currentIndex = ref(1);
    const moveOffset = ref(0);
    const useTransition = ref(false);
    let containerWidth = 0;

    const listStyle = computed(() => ({
      transform: `translate3d(${moveOffset.value}px, 0, 0)`,
      transition: useTransition.value ? `transform ${props.duration}ms` : null
    }));

    const count = computed(() => swiperList.value.length);
    const canSwiper = computed(() => count.value > 1);
    const activeIndex = computed(() => {
      let active = currentIndex.value;
      if (props.loop === false) {
        return active;
      }
      if (currentIndex.value === count.value - 1) {
        active = 1;
      } else if (currentIndex.value === 0) {
        active = count.value - 2;
      }
      return active;
    });

    onMounted(() => {
      containerWidth = container.value.offsetWidth;
      initSwiper();
      setActiveOffset();
      moveByIndex(currentIndex.value, false);

      if (props.autoPlay) {
        setAutoPlay();
      }
    });

    function initSwiper() {
      const vnodes = ctx.slots.default ? ctx.slots.default() : [];

      const list = getChildFromSlot(vnodes, `${name}-item`);
      defaultSwiperList.value = list;
      if (props.loop === false) {
        swiperList.value = [...list];
        return;
      }
      // 复制第一个、最后一个，分别插入到数据源的尾部和头部，用于实现无限滚动
      swiperList.value = list.length > 1 ? [list[list.length - 1], ...list, list[0]] : list;
    }

    let startX, startY, startOffset, hasBindPreventEvent, stopMove;
    function onTouchstart(e) {
      ctx.emit('touchstart', e);
      if (!canSwiper.value) return;
      if (containerWidth === 0) {
        containerWidth = container.value.offsetWidth;
      }
      setActiveOffset();
      clearAutoPlay();
      useTransition.value = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startOffset = startX - moveOffset.value;
      hasBindPreventEvent = false;
      stopMove = false;
    }

    function onTouchmove(e) {
      ctx.emit('touchmove', e);
      if (!canSwiper.value) return;

      const { clientX, clientY } = e.touches[0];
      const x = Math.abs(clientX - startX);
      const y = Math.abs(clientY - startY);

      if (x < y) {
        // Y轴移动距离大于X轴时，认为不是滑动swiper操作
        stopMove = true;
        return;
      }
      if (!hasBindPreventEvent) {
        document.addEventListener('touchmove', preventDefault, { passive: false });
        hasBindPreventEvent = true;
      }
      // 当移动距离大于15px时，认为可以切换到下一项
      if (x >= 15 && !stopMove) {
        stopMove = false;
        moveOffset.value = clientX - startOffset;
      }
    }

    function onTouchend(e) {
      ctx.emit('touchend', e);

      document.removeEventListener('touchmove', preventDefault, { passive: true });
      stopMove = false;
      hasBindPreventEvent = false;

      if (!canSwiper.value) return;

      const distance = e.changedTouches[0].clientX - startX;
      const targetIndex =
        Math.abs(distance) > 50
          ? currentIndex.value + (distance < 0 ? 1 : -1)
          : currentIndex.value;
      resetCurrentIndex(targetIndex);
      moveByIndex(currentIndex.value);
    }

    function preventDefault(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }

    function resetCurrentIndex(targetIndex) {
      const { loop, autoPlay } = props;
      const { length } = swiperList.value;
      if (loop === false && (targetIndex > length || targetIndex === 0)) {
        targetIndex = targetIndex === 0 || autoPlay ? 1 : length;
      }
      currentIndex.value = targetIndex;
      moveByIndex(currentIndex.value);
    }

    function onTransitionend() {
      setActiveOffset();
      if (props.autoPlay) {
        setAutoPlay();
      }
    }

    function moveByIndex(index, transition = true) {
      useTransition.value = transition;
      if (count.value <= 1) {
        moveOffset.value = 0;
      } else {
        moveOffset.value = props.loop ? -index * containerWidth : -(index - 1) * containerWidth;
      }
      ctx.emit('change', activeIndex.value);
    }

    function setActiveOffset() {
      if (currentIndex.value === activeIndex.value) return;
      currentIndex.value = activeIndex.value;
      moveByIndex(activeIndex.value, false);
    }

    let timer;
    function setAutoPlay() {
      timer = setTimeout(() => {
        resetCurrentIndex(currentIndex.value + 1);
        moveByIndex(currentIndex.value);
      }, props.interval);
    }

    function clearAutoPlay() {
      if (timer) {
        clearTimeout(timer);
      }
    }

    return {
      name,
      container,
      activeIndex,
      moveOffset,
      useTransition,
      defaultSwiperList,
      swiperList,
      listStyle,
      canSwiper,
      onTouchstart,
      onTouchmove,
      onTouchend,
      onTransitionend,
    };
  }
});
</script>
