<template>
  <div
    :class="[`${name}`, rootClass]"
    :style="{fontSize: size}"
    @click="onClick"
  >
    <template v-if="!isCarousel">
      <template v-if="avatars.length" >
        <img v-for="(avatar, index) in avatars" :key="index" :src="avatar" />
      </template>
      <svg v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" :style="{color}">
        <path d="M512 928C282.8 928 97.1 742.2 97.1 513.1S282.8 98.2 512 98.2 926.9 284 926.9 513.1 741.2 928 512 928z m217.3-177.9c10.9 0 19.8-7.6 19.8-17V614.9C749.1 547 591.1 513 512 513s-237.1 34-237.1 101.9v118.3c0 9.3 8.8 17 19.7 17l434.7-0.1zM512 453.8c65.5 1.4 119.6-50.6 121-116.1 1.4-65.5-50.6-119.6-116.1-121h-5c-65.5 1.4-117.4 55.6-116.1 121 1.5 63.6 52.7 114.8 116.2 116.1z" fill="currentColor"></path>
      </svg>
    </template>
    <template v-else>
      <transition-group name="horizon-fade-zoom">
        <img
          v-for="(avatar, index) in avatars"
          v-show="index === currentIdx"
          :key="index"
          :src="avatar"
        />
      </transition-group>
    </template>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted, onUnmounted } from 'vue';
import { prefix } from '../config';

const name = `${prefix}-avatar`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 头像的url
     * @attribute url
     */
    url: [String, Array],
    /**
     * @description 头像大小
     * @attribute size
     */
    size: String,
    /**
     * @description 默认头像颜色
     * @attribute color
     */
    color: String,
    /**
     * @description 是否为轮播头像
     * @attribute carousel
     */
    carousel: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    const count = computed(() => {
      const { url } = props;
      return Array.isArray(url) ? url.length : 1;
    });

    const avatars = computed(() => {
      const { url } = props;
      if (url) {
        return Array.isArray(url) ? url : [url];
      }

      return [];
    });

    const isCarousel = computed(() => (count.value > 1 && props.carousel));

    const rootClass = computed(() => {
      if (count.value > 1) {
        return isCarousel.value ? `${name}_carousel` : `${name}_${count.value}`;
      }
      return '';
    });

    const currentIdx = ref(0);
    const timer = ref(0);

    onMounted(() => {
      if (isCarousel.value) {
        timer.value = setInterval(() => {
          currentIdx.value = (currentIdx.value + 1) % count.value;
        }, 1500);
      }
    });
    onUnmounted(() => {
      timer.value && clearInterval(timer.value);
    });

    return {
      name,
      count,
      rootClass,
      avatars,
      isCarousel,
      currentIdx,
      onClick: e => ctx.emit('click', e),
    };
  },
});
</script>
