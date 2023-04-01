<template>
  <div :class="{
    [`${name}`]: true,
    [`${name}_${theme}`]: theme !== 'normal'
  }">
    <div :class="`${name}__status`"></div>
    <div :class="`${name}__wrap`">
      <div :class="`${name}__left`" @click="onLeftClick">
        <slot name="left">
          <button :class="`${name}__back`" @click.stop="onBack" :title="leftText">
            <component v-if="showLeftIcon" :is="navLeftIcon" size="24px" />
            <span v-if="leftText" :class="`${name}__back-text`">{{leftText}}</span>
          </button>
        </slot>
      </div>
      <div :class="`${name}__title`" @click="onTitleClick">
        <slot name="title">
          <slot></slot>
        </slot>
      </div>
      <div :class="`${name}__right`" @click="onRightClick">
        <slot name="right">
          <button :class="`${name}__right-btn`" v-if="rightText">
            <span
              v-if="rightText"
              :class="`${name}__right-text`"
              @click="onRightTextClick"
            >{{rightText}}</span>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { ArrowLeft, Close } from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-nav-bar`;
export default defineComponent({
  name,
  props: {
    /**
     * @description 是否展示导航栏左侧的图标
     * @attribute show-left-icon
     */
    showLeftIcon: {
      type: Boolean,
      default: true
    },
    /**
     * @description 导航栏左侧的图标
     * @attribute left-icon
     */
    leftIcon: {
      type: String,
      default: 'left',
      validator: val => ['left', 'close'].indexOf(val) !== -1
    },
    /**
     * @description 导航栏左侧的文字
     * @attribute left-text
     */
    leftText: String,
    /**
     * @description 导航栏右侧的文字
     * @attribute right-text
     */
    rightText: String,
    /**
     * @description 导航栏主题
     * @attribute theme
     * @enum ["normal", "gray", "white", "black"]
     * @default normal
     */
    theme: {
      type: String,
      default: 'white',
      validator: val => ['normal', 'gray', 'white', 'black'].indexOf(val) !== -1
    }
  },
  emits: ['back', 'left-click', 'title-click', 'right-click', 'right-text-click'],
  setup(props, ctx) {
    const onBack = e => ctx.emit('back', e);
    const onLeftClick = e => ctx.emit('left-click', e);
    const onTitleClick = e => ctx.emit('title-click', e);
    const onRightClick = e => ctx.emit('right-click', e);
    const onRightTextClick = e => ctx.emit('right-text-click', e);

    const navLeftIcon = computed(() => (props.leftIcon === 'left' ? ArrowLeft : Close));

    return {
      name: `${prefix}-navbar`,
      navLeftIcon,
      onBack,
      onLeftClick,
      onTitleClick,
      onRightClick,
      onRightTextClick,
    };
  }
});
</script>
