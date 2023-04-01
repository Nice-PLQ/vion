<template>
  <div
    :class="{
      [`${name}`]: true,
      [`${name}_multiple`]: !!desc,
      [`${name}_click`]: isListenClick
    }"
    :role="isListenClick ? 'button': null"
  >
    <div :class="`${name}__title-wrap`">
      <slot name="left"></slot>
      <div :class="`${name}__title`" v-if="title || $slots.title">
        <slot name="title">
          <div :class="`${name}__title-txt`" :style="{color: titleColor}">{{title}}</div>
        </slot>
        <slot name="desc">
          <div :class="[`${name}__desc-txt`, `${name}__desc-txt_${descEllipsis}`]" v-if="desc">{{desc}}</div>
        </slot>
      </div>
    </div>
    <div :class="`${name}__content`" v-if="showContent">
      <slot name="right">
        <span :class="`${name}__help`" v-if="help">{{help}}</span>
        <slot name="icon">
          <component class="" :is="arrowIcon" />
        </slot>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { ArrowDown, ArrowUp, ArrowRight } from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-list`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 列表标题
     * @attribute title
     */
    title: String,
    /**
     * @description 列表标题颜色
     * @attribute title-color
     */
    titleColor: String,
    /**
     * @description 辅助信息
     * @attribute help
     */
    help: String,
    /**
     * @description 详细说明
     * @attribute desc
     */
    desc: String,
    /**
     * @description 详细说明的文本省略
     * @attribute desc-ellipsis
     */
    descEllipsis: {
      type: String,
      default: 'single',
      validator: val => ['single', 'multiple'].indexOf(val) !== -1
    },
    /**
     * @description 箭头图标的方向
     * @attribute arrow-direction
     * @enum ["right", "up", "down"]
     */
    arrowDirection: {
      type: String,
      validator: val => ['right', 'up', 'down'].indexOf(val) !== -1
    },
  },
  setup(props, ctx) {
    const showContent = computed(() => {
      const { right, icon } = ctx.slots;
      const { desc, arrowDirection } = props;
      return right || icon || desc || arrowDirection;
    });

    const isListenClick = computed(() => !!ctx.attrs.onClick);

    const arrowIcon = computed(() => {
      let icon;
      if (props.arrowDirection === 'up') {
        icon = ArrowUp;
      } else if (props.arrowDirection === 'down') {
        icon = ArrowDown;
      } else if (props.arrowDirection === 'right') {
        icon = ArrowRight;
      }

      return icon;
    });

    return {
      name,
      arrowIcon,
      showContent,
      isListenClick,
    };
  }
});
</script>
