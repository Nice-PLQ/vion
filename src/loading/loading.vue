<template>
  <transition
    :name="type === 'float' ? 'loading-fade' : ''"
    @after-leave="afterLeave"
  >
    <CircleLoading :ratio="ratio" v-if="type === 'circle'" />
    <template v-else>
      <div
        v-if="visible"
        :class="{
          [`${name}`]: true,
          [`${name}_${type}`]: true
        }"
      >
        <div :class="`${name}__inner`">
          <div :class="[`${name}__icon`, `${name}__icon-${loadingTheme}`]" :style="{fontSize: size}"  />
          <span :class="`${name}__txt-tips`" v-if="type === 'float'">{{text}}</span>
          <span :class="`${name}__txt-tips`" v-else-if="$slots.default">
            <slot></slot>
          </span>
        </div>
      </div>
    </template>
  </transition>
</template>

<script>
import { defineComponent, watch, computed } from 'vue';
import CircleLoading from './circle-loading.vue';
import { prefix } from '../config';

const name = `${prefix}-loading`;

export default defineComponent({
  name,
  components: { CircleLoading },
  props: {
    /**
     * @description 是否可见
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * @description loading类型
     * @attribute type
     * @enum ["normal", "float", "circle"]
     * @default normal
     */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'float', 'circle'].indexOf(value) !== -1
    },
    /**
     * @description 文案
     * @attribute text
     */
    text: String,
    /**
     * @description 大小
     * @attribute size
     */
    size: String,
    /**
     * @description loading样式
     * @attribute theme
     */
    theme: {
      type: String,
      default: 'gray',
      validator: value => ['white', 'gray', 'red'].indexOf(value) !== -1
    },
    /**
     * @description loading显示时长
     * @attribute duration
     */
    duration: {
      type: Number,
      default: 0,
    },
    ratio: {
      type: Number,
      default: 0,
    }
  },
  emits: ['closed', 'close'],
  setup(props, ctx) {
    const loadingTheme = computed(() => (props.type === 'float' ? 'white' : props.theme));

    watch(
      () => props.visible,
      (val) => {
        if (val && props.duration > 0) {
          setTimeout(() => ctx.emit('close'), props.duration);
        }
      }
    );

    const afterLeave = () => {
      if (props.type === 'float') {
        ctx.emit('closed');
      }
    };

    return {
      name,
      loadingTheme,
      afterLeave
    };
  },
});
</script>
