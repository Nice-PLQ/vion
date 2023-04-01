<template>
  <div :class="name" ref="wrapper">
    <slot></slot>
    <div :class="`${name}'__more'`">
      <slot name="error" v-if="error">
        <div :class="`${name}__error`">
          <span>{{ errorText || $locale.translate('loadingError') }}</span>
        </div>
      </slot>
      <slot name="completed" v-else-if="completed">
        <div :class="`${name}__completed`">
          <span>{{ completedText || $locale.translate('loadingCompleted') }}</span>
        </div>
      </slot>
      <slot name="loading" v-else-if="loading">
        <div :class="`${name}__next`">
          <v-loading theme="gray">{{ loadingText || $locale.translate('loading') }}</v-loading>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { prefix } from '../config';
import VLoading from '../loading';

const name = `${prefix}-infinite-loading`;

export default defineComponent({
  name,
  props: {
    /**
     * @description 滚动到离底部多少距离时加载
     * @attribute bottom-offset
     */
    bottomOffset: {
      type: [Number, String],
      default: 0
    },

    /**
     * @description 正在加载时的提示
     * @attribute loading-text
     */
    loadingText: String,
    /**
     * @description 完成加载时的提示
     * @attribute completed-text
     */
    completedText: String,

    /**
     * @description 加载异常时的提示
     * @attribute error-text
     */
    errorText: String,

    /**
     * @description 父容器的css选择器
     * @attribute container
     */
    container: String
  },
  components: {
    VLoading
  },
  emits: ['load', 'scroll'],
  setup(props, ctx) {
    const loading = ref(false);
    const hadLoaded = () => {
      loading.value = false;
    };

    const completed = ref(false);
    const hadCompleted = () => {
      completed.value = true;
      hadLoaded();
    };

    const error = ref(false);
    const hadError = () => {
      error.value = true;
      hadLoaded();
    };

    const wrapper = ref(null);

    const useScrollEvent = () => {
      const { container, bottomOffset } = props;
      let targetContainer = document.body;
      const calcDistance = () => {
        const { scrollTop: refScrollTop, offsetHeight: refOffsetHeight } = document.documentElement || document.body;
        const { scrollTop, offsetHeight } = targetContainer;
        const targetScrollTop = container ? scrollTop : refScrollTop;
        const targetOffsetHeight = container ? offsetHeight : refOffsetHeight;
        const distance =
          wrapper.value.offsetHeight - targetOffsetHeight - targetScrollTop;
        const bottomDistance =
          typeof bottomOffset === 'string'
            ? parseInt(bottomOffset, 10)
            : bottomOffset;
        if (distance <= bottomDistance) {
          loading.value = true;
          ctx.emit('load', hadLoaded, hadCompleted, hadError);
        }
      };

      const onScroll = function(event) {
        const schedule =
          window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        if (!loading.value && !completed.value) {
          schedule(calcDistance);
        }
        ctx.emit('scroll', event);
      };

      const addListener = () => {
        if (container) {
          targetContainer = document.querySelector(container);
        }
        targetContainer.addEventListener('scroll', onScroll, false);
      };

      const removeListener = () => {
        targetContainer.removeEventListener('scroll', onScroll, false);
      };

      return {
        addListener,
        removeListener
      };
    };

    const { addListener, removeListener } = useScrollEvent();

    onMounted(() => {
      addListener();
    });

    onUnmounted(() => {
      removeListener();
    });

    return {
      name,
      wrapper,
      error,
      completed,
      loading
    };
  }
});
</script>
