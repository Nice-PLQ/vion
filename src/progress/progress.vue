<template>
  <div :class="`${name}`">
    <template v-if="type === 'circle'">
      <CircleProgress :ratio="percent" />
    </template>
    <template v-else>
      <div :class="`${name}__outer`" :style="{ height, borderRadius: height }">
        <div
          :class="`${name}__inner`"
          :style="{
            width: `${percent}%`,
            background,
            height,
            borderRadius: height,
          }"
        ></div>
      </div>
      <slot name="text" v-if="showTxt">
        <div :class="`${name}__text`">{{ percent }}%</div>
      </slot>
    </template>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import CircleProgress from './circle.vue';
import { prefix } from '../config';

const name = `${prefix}-progress`;
export default defineComponent({
  name,
  components: { CircleProgress },
  props: {
    /**
     * @description 进度条当前值
     * @attribute value
     */
    value: {
      type: Number,
      default: 0,
    },
    /**
     * @description 进度条类型
     * @attribute type
     * @enum ["normal", "circle"]
     * @default normal
     */
    type: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'circle'].indexOf(value) !== -1,
    },
    /**
     * @description 背景色
     * @attribute background
     */
    background: String,
    /**
     * @description 是否显示辅助文本
     * @attribute show-txt
     */
    showTxt: {
      type: Boolean,
      default: true,
    },
    /**
     * @description 进度条高度
     * @attribute height
     */
    height: String,
  },
  setup(props) {
    const percent = computed(() => {
      let val = props.value;
      if (val > 1) {
        val = 1;
      } else if (val < 0) {
        val = 0;
      }
      return Math.round(val * 100);
    });

    return { name, percent };
  },
});
</script>
