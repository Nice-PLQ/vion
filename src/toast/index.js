import { createApp, defineComponent, nextTick, ref, h } from 'vue';
import QToast from './toast.vue';
import './style';

const Toast = (options) => {
  // server render return
  if (window === undefined) return;

  const root = document.createElement('div');
  document.body.appendChild(root);
  const visible = ref(false);

  const instance = defineComponent({
    render: () => h(QToast, {
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

  nextTick(() => {
    visible.value = true;
  });

  return createApp(instance).mount(root);
};

['success', 'error', 'info'].forEach((type) => {
  Toast[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Toast(options);
  };
});

Toast.install = (app) => {
  app.component(QToast.name, QToast);
  app.config.globalProperties.$toast = Toast;
};

export default Toast;
