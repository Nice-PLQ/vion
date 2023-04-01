import { createApp, defineComponent, nextTick, ref, h } from 'vue';
import Loading from './loading.vue';
import Locale from '../locale';
import './style';

let instance;

const createLoading = (options) => {
  // server render return
  if (window === undefined) return;

  if (instance) {
    instance.clear();
    instance = null;
  }

  const root = document.createElement('div');
  document.body.appendChild(root);
  const visible = ref(false);

  instance = defineComponent({
    render: () => h(Loading, {
      ...options,
      visible: visible.value,
      onClose: () => {
        visible.value = false;
      },
      onClosed: () => {
        root.parentElement.removeChild(root);
      },
    }),
  });

  instance.clear = () => {
    visible.value = false;
  };

  nextTick(() => {
    visible.value = true;
  });

  return createApp(instance).mount(root);
};

Loading.show = (options) => {
  // 配置项容错
  if (options === undefined) {
    options = {
      text: Locale.translate('loading')
    };
  } else if (typeof options === 'string') {
    options = {
      text: options,
      duration: 0,
    };
  }

  options = {
    ...options,
    type: 'float',
  };

  return createLoading(options);
};

Loading.hide = () => {
  if (!instance) return;
  instance.clear();
};

Loading.install = (app) => {
  app.component(Loading.name, Loading);
  app.config.globalProperties.$loading = Loading;
};

export default Loading;
