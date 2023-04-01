<template>
  <div :class="name" ref="tab">
    <div :class="`${name}__nav-wrap`">
      <ul
        role="tablist"
        :class="{
          [`${name}__nav`]: true,
          [`${name}__nav_scrollable`]: canScroll
        }"
        @touchstart.stop="onTouchstart"
        @touchmove.stop="onTouchmove"
        @touchend.stop="onTouchend"
        :style="{transform: `translate3d(${navOffset}px, 0, 0)`}"
        ref="tabNav"
      >
        <li
          role="tab"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{
            [`${name}__item`]: true,
            on: index === currentIndex,
          }"
          :aria-selected="index === currentIndex ? true : null"
          :style="index === currentIndex ? activeStyle : null"
          @click="e => onClick(index, e)"
        >{{item.title}}</li>
      </ul>
    </div>
    <div
      :class="`${name}__content`"
      :style="{
        transform: `translate3d(${panelOffset}px, 0, 0)`,
        transition: animation ? `all ${duration} ${timingFunction}`: ''
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch, onMounted, nextTick, provide } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-tab`;

export default defineComponent({
  name,
  props: {
    modelValue: [Number, String],
    /**
     * @description 当前选中的tab索引
     * @attribute value
     */
    value: {
      type: [Number, String],
      default: 0
    },
    /**
     * @description 是否需要过渡动画
     * @attribute animation
     */
    animation: {
      type: Boolean,
      default: true
    },
    /**
     * @description 动画过渡时长
     * @attribute duration
     */
    duration: {
      type: String,
      default: '400ms'
    },
    /**
     * @description 动画函数
     * @attribute timing-function
     */
    timingFunction: {
      type: String,
      default: 'ease'
    },
    /**
     * @description tab显示的数量，当标签超过改值时将开启滚动特性
     * @attribute show-count
     */
    showCount: {
      type: Number,
      default: 4
    },
    /**
     * @description tab激活时的指示器颜色
     * @attribute active-indicator-color
     */
    activeIndicatorColor: String,
    /**
     * @description tab激活时的文本颜色
     * @attribute active-text-color
     */
    activeTextColor: String
  },
  emits: ['update:modelValue', 'change', 'click'],
  setup(props, ctx) {
    const currentIndex = ref(0);
    const tabList = ref([]);
    const panelOffset = ref(0);
    const navOffset = ref(0);

    const tab = ref(null);
    const tabNav = ref(null);

    const currentValue = computed(() => props.modelValue || props.value);
    const canScroll = computed(() => tabList.value.length > props.showCount);
    const tabOffsetWidth = computed(() => tab.value.offsetWidth || 0);
    const navOffsetWidth = computed(() => tabNav.value.offsetWidth || 0);
    const isUsedNameAsKey = computed(() => tabList.value.every(tab => tab.name !== undefined));
    const activeStyle = computed(() => ({
      borderColor: props.activeIndicatorColor,
      color: props.activeTextColor
    }));

    watch(currentValue, setValue);

    onMounted(() => {
      nextTick(() => setValue(currentValue.value));
    });

    provide('addTab', initTab);

    function initTab(tabs) {
      // 如果用name作为key，判断是否有重复name
      const isNameIsDuplicated = tabList.value.some(tab => tabs.name && tab.name === tabs.name);
      if (isNameIsDuplicated) {
        console.error(`duplicated 'name' property at ${prefix}-tab-panel component`);
        return;
      }

      tabList.value.push(tabs);
    }

    function setValue(val) {
      const index = getIndex(val);
      currentIndex.value = index;
      setNavOffsetByIndex(index);
      setPanelOffsetByIndex(index);
    };

    function getIndex(index) {
      let realIndex = index;
      if (typeof index === 'string') {
        tabList.value.some((tab, i) => {
          if (tab.name === index) {
            realIndex = i;
            return true;
          }
          return false;
        });
      }

      return realIndex;
    }

    /**
     * 通过索引激活指定项
     * @param {Number} index 索引
     */
    function setNavOffsetByIndex(index) {
      if (!canScroll.value) return;
      const { children } = tabNav.value;
      const { offsetLeft, offsetWidth } = children[index];
      const distance = (offsetLeft - tabOffsetWidth.value / 2 + offsetWidth / 2) * -1;
      tabNav.value.style.webkitTransition = `all ${props.duration} ${props.timingFunction}`;
      navOffset.value = getLimitOffset(distance);
    }

    function getLimitOffset(distance) {
      if (distance >= 0) {
        distance = 0;
      }

      if (tabOffsetWidth.value > navOffsetWidth.value) {
        distance = 0;
      } else {
        // 临界值处理
        const maxOffset = tabOffsetWidth.value - navOffsetWidth.value;
        if (distance <= maxOffset) {
          distance = maxOffset;
        }
      }
      return distance;
    }

    function setPanelOffsetByIndex(index) {
      panelOffset.value = tabOffsetWidth.value * index * -1;
    }

    const onClick = (index, event) => {
      const key = isUsedNameAsKey.value ? tabList.value[index].name : index;
      ctx.emit('change', key);
      ctx.emit('update:modelValue', key);
      ctx.emit('click', key, event);
      currentIndex.value = index;
      setNavOffsetByIndex(index);
      setPanelOffsetByIndex(index);
    };

    let navStartX, navStartOffset, startTime;
    const onTouchstart = (e) => {
      if (!canScroll.value) return;
      tabNav.value.style.webkitTransition = '';
      navStartX = e.touches[0].clientX;
      navStartOffset = navOffset.value;
      startTime = Date.now();
    };

    const onTouchmove = (e) => {
      if (!canScroll.value) return;
      const distance =
        e.touches[0].clientX - navStartX + navStartOffset;
      navOffset.value = getLimitOffset(distance);
    };

    const onTouchend = (e) => {
      if (!canScroll.value) return;
      const moveTime = Date.now() - startTime;
      let shouldMoveTo = 0;

      // 惯性滚动
      if (moveTime < 300) {
        shouldMoveTo = (e.changedTouches[0].clientX - navStartX) * 1.25;
      }

      tabNav.value.style.webkitTransition =
        'all .8s cubic-bezier(.17,.97,.2,.98)';
      navOffset.value = getLimitOffset(navOffset.value + shouldMoveTo);
    };

    return {
      name,
      tab,
      tabNav,
      canScroll,
      navOffset,
      tabList,
      currentIndex,
      activeStyle,
      panelOffset,
      onClick,
      onTouchstart,
      onTouchmove,
      onTouchend
    };
  }
});
</script>
