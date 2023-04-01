<template>
  <div :class="name">
    <div :class="`${name}__content`" @scroll="onScroll">
      <ul :class="`${name}__list`">
        <li v-for="(group, index) in list" :key="index" :ref="(el) => anchorRefs[`anchor_${index}`] = el">
          <div
            :class="{
              [`${name}__group-label`]: true,
              on: current === index
            }"
            @click.stop="onClick(index)"
          >{{group.label}}</div>
            <slot name="row" v-for="(item, key) in group.children" :key="key" v-bind:row="item" />
        </li>
      </ul>
    </div>
    <ul
      :class="`${name}__indicator`"
      ref="indicator"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
    >
      <li
        v-for="(group, index) in list"
        :key="index"
        :class="{
          on: current === index
        }"
        @click.stop="onClick(index)"
      >{{group.anchor || group.label}}</li>
    </ul>
    <div v-if="showTips" :class="`${name}__tooltips`">{{list[current].anchor || list[current].label}}</div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-indexes`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 索引数据源
     * @attribute list
     */
    list: {
      type: Array,
      default: () => []
    },
    /**
     * @description 默认索引
     * @attribute default-index
     * @default 0
     */
    defaultIndex: {
      type: [String, Number],
      default: 0
    },
  },
  emits: ['select'],
  setup(props, ctx) {
    const current = ref(0);
    const showTips = ref(false);
    const indicator = ref(null);
    const anchorRefs = {};
    for (let i = 0; i < props.list.length; i++) {
      anchorRefs[`anchor_${i}`] = ref(null);
    }

    onMounted(() => {
      const { list, defaultIndex } = props;
      let index = defaultIndex;
      if (typeof defaultIndex === 'string') {
        index = list.findIndex(item => item.anchor === defaultIndex);
      }
      scrollIntoView(index);
    });

    function scrollIntoView(index) {
      current.value = index;
      anchorRefs[`anchor_${index}`].scrollIntoView();
      ctx.emit('select', props.list[index].anchor || index);
    };

    const onClick = index => scrollIntoView(index);

    const onScroll = () => {
      Object.keys(anchorRefs).some((key) => {
        const { top, bottom } = anchorRefs[key].getBoundingClientRect();
        if (top <= 0 && bottom > 0) {
          const index = key.split('_')[1];
          current.value = parseInt(index, 10);
          return true;
        }
        return false;
      });
    };

    let ranges = [];
    const onTouchstart = () => {
      ranges = [];
      Array.from(indicator.value.children).forEach((node) => {
        const { top } = node.getBoundingClientRect();
        ranges.push(top);
      });
    };

    const onTouchmove = () => {
      if (!showTips.value) {
        showTips.value = true;
      }

      const { clientY } = event.touches[0];
      for (let i = ranges.length - 1; i >= 0; i--) {
        if (clientY > ranges[i]) {
          scrollIntoView(i);
          break;
        }
      }
    };

    const onTouchend = () => {
      showTips.value = false;
    };

    return {
      name: `${prefix}-index`,
      current,
      showTips,
      indicator,
      anchorRefs,
      onClick,
      onScroll,
      onTouchstart,
      onTouchmove,
      onTouchend,
    };
  }
});
</script>
