<template>
  <div
    :class="[`${name}`, rootClass]"
    :style="{fontSize: size}"
    @click="onClick"
  >
    <template v-if="!isCarousel">
      <img v-for="(avatar, index) in avatars" :key="index" :src="avatar" />
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
    <slot />
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
     * @description qq号
     * @attribute uin
     */
    uin: [String, Number, Array],
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
     * @description 是否为群头像
     * @attribute group
     */
    group: {
      type: Boolean,
      default: false
    },
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
      const { url, uin } = props;
      if (url) {
        return Array.isArray(url) ? url.length : 1;
      }

      return Array.isArray(uin) ? uin.length : 1;
    });

    const uin2AvatarUrl = (uin) => {
      if (!uin) {
        return 'https://static-res.qq.com/static-res/q-ui/avatar.png';
      }

      return props.group ? `https://p.qlogo.cn/gh/${uin}/${uin}/100` : `https://q.qlogo.cn/g?b=qq&nk=${uin}&s=100`;
    };

    const avatars = computed(() => {
      const { url, uin } = props;
      if (url) {
        return Array.isArray(url) ? url : [url];
      }
      return Array.isArray(uin) ? uin.map(uin2AvatarUrl) : [uin2AvatarUrl(uin)];
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
        }, 1400);
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
