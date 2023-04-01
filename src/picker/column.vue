<template>
  <div :class="`${name}-list`">
    <ul
      :class="`${name}-column`"
      @touchstart.stop="onTouchStart"
      @touchmove.stop="onTouchMove"
      @touchend.stop="onTouchEnd"
      @transitionend="onTransitionEnd"
      :style="{
        transform: `translate3d(0, ${offset}px, 0)`,
        transition: useTransition ? 'transform .8s cubic-bezier(.17,.97,.2,.98)' : null
      }"
    >
      <li
        :class="`${name}-column__item`"
        v-for="(item, index) in currentColumn"
        :key="item.index"
        @click="onClick(index)"
      >{{item[valueKey]}}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, watch, computed, ref, nextTick, onMounted } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-picker`;
export default defineComponent({
  props: [
    'column',
    'selectedValue',
    'showItemCount',
    'valueKey',
    'inertia',
    'clickSelectable',
    'immediateChange'
  ],
  emits: ['change'],
  setup(props, ctx) {
    const offset = ref(0);
    const itemHeight = ref(46);
    const useTransition = ref(true);
    const currentIndex = ref(0);
    const currentColumn = ref(props.column);
    let hadEmitChange = false;
    let translateY, startTime, startY;

    const baseOffset = computed(() => (itemHeight.value * (props.showItemCount - 1)) / 2);
    const columnHeight = computed(() => currentColumn.value.length * itemHeight.value);
    const contentHeight = computed(() => props.showItemCount * itemHeight.value);
    const minOffset = computed(() => baseOffset.value - columnHeight.value);
    const maxOffset = computed(() => baseOffset.value + itemHeight.value);

    onMounted(() => {
      if (!props.selectedValue) {
        setOffsetByIndex(0);
      }
    });

    watch(() => props.selectedValue, (val) => {
      setValue(val);
    }, {
      immediate: true
    });
    watch(() => props.column, (nextColumn) => {
      currentColumn.value = nextColumn;
    });

    /**
     * 设置列的选中项
     * @param {Object} value 选中项的数据
     */
    function setValue(value) {
      if (!value) return;
      currentColumn.value.some((item, index) => {
        if (item[props.valueKey] === value[props.valueKey]) {
          currentIndex.value = index;
          nextTick(() => {
            setOffsetByIndex(index);
          });
          return true;
        }
        return false;
      });
    };

    function getValue() {
      return currentColumn.value[currentIndex.value];
    }

    function setOffsetByIndex(index) {
      setInertialRolling(baseOffset.value - index * itemHeight.value);
    }

    function setInertialRolling(targetDistance) {
      offset.value = targetDistance;
      useTransition.value = true;
    }

    function shouldEmitChange() {
      if (!hadEmitChange) {
        hadEmitChange = true;
        ctx.emit('change', currentIndex.value, currentColumn.value[currentIndex.value]);
      }
    }

    /**
     * 通过滚动后的距离计算最优的index
     * @param {Number} offset 列滚动后的偏移量
     */
    function getIndexByOffset(offset) {
      if (offset <= 0) {
        // eslint-disable-next-line no-param-reassign
        offset = Math.max(
          offset,
          (columnHeight.value -
            contentHeight.value +
            (contentHeight.value - itemHeight.value) / 2) *
            -1
        );
      } else {
        // eslint-disable-next-line no-param-reassign
        offset = Math.min(offset, (contentHeight.value - itemHeight.value) / 2);
      }

      const index = Math.round(Math.abs((offset - (contentHeight.value - itemHeight.value) / 2) /
            itemHeight.value));

      return Math.min(index, currentColumn.value.length - 1);
    }

    /**
     * 设置列的数据源
     * @param {Array} column 列数据源
     * @param {Boolean} resetOffset 是否重置偏移
     */
    function setColumnValues(column, resetOffset = true) {
      currentColumn.value = column;
      if (resetOffset) {
        currentIndex.value = 0;
        setOffsetByIndex(0);
      } else if (currentIndex.value > column.length - 1) {
        currentIndex.value = column.length - 1;
        setOffsetByIndex(currentIndex.value);
      }
    }

    function onClick(index) {
      if (index === currentIndex.value || !props.clickSelectable) return;

      // 点击操作时，立即触发change事件
      hadEmitChange = true;
      currentIndex.value = index;
      ctx.emit('change', index, currentColumn.value[index]);
      setOffsetByIndex(index);
    }

    function onTouchStart(e) {
      translateY = offset.value;
      startTime = Date.now();
      startY = e.touches[0].pageY;
      useTransition.value = false;
    }

    function onTouchMove(e) {
      e.preventDefault();
      const touch = e.touches[0];
      let moveOffset = touch.pageY - startY + translateY;
      if (moveOffset > maxOffset.value) {
        moveOffset = maxOffset.value;
      }

      if (moveOffset < minOffset.value) {
        moveOffset = minOffset.value;
      }
      offset.value = moveOffset;
    };

    function onTouchEnd(e) {
      const moveTime = Date.now() - startTime;
      const changedTouche = e.changedTouches[0];
      let shouldMoveTo = 0;

      // 移动间隔小于300ms且惯性系数大于0，需要继续执行惯性滚动
      if (moveTime < 300 && props.inertia > 0) {
        shouldMoveTo =
          (changedTouche.pageY - startY) *
          (1 + parseInt(props.inertia, 10));
      }

      const nextIndex = getIndexByOffset(offset.value + shouldMoveTo);
      currentIndex.value = nextIndex;
      hadEmitChange = false;
      setOffsetByIndex(nextIndex);

      // 判断touchend后是否需要立即emit('change')
      if (props.immediateChange) {
        shouldEmitChange();
      }
    }

    function onTransitionEnd() {
      if (!props.immediateChange) {
        shouldEmitChange();
      }
    }

    return {
      name,
      offset,
      itemHeight,
      useTransition,
      currentIndex,
      currentColumn,
      setColumnValues,
      setValue,
      getValue,
      onClick,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTransitionEnd,
    };
  }
});
</script>
