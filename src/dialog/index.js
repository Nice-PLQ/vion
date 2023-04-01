import { createApp, defineComponent, nextTick, ref, h } from 'vue';
import QDialog from './dialog.vue';
import Locale from '../locale';
import './style';

// 默认配置项
const getDefaultOptions = () => ({
  visible: false,
  dialogClass: '',
  title: '',
  content: '',
  showConfirmBtn: true,
  showCancelBtn: false,
  confirmBtnText: Locale.translate('confirm'),
  cancelBtnText: Locale.translate('cancel'),
  confirmBtnTextColor: '',
  cancelBtnTextColor: '',
  lockScroll: true,
  buttons: null,
  callback: null,
  beforeClose: null,
  dangerouslyUseHTMLString: false
});

let instance;

const Dialog = (options) => {
  // server render return
  if (window === undefined) return;

  const root = document.createElement('div');
  document.body.appendChild(root);
  const visible = ref(false);

  if (instance) {
    instance.clear();
    instance = null;
  }

  instance = defineComponent({
    render: () => h(QDialog, {
      ...getDefaultOptions(),
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

  createApp(instance).mount(root);
  nextTick(() => {
    visible.value = true;
  });

  return instance;
};

Dialog.alert = Dialog;

// eslint-disable-next-line no-multi-assign
Dialog.show = Dialog.confirm = (options) => {
  Dialog({
    showCancelBtn: true,
    ...options
  });
};

Dialog.close = () => {
  if (instance) {
    instance.clear();
  }
};

Dialog.install = (app) => {
  app.component(QDialog.name, QDialog);
  app.config.globalProperties.$dialog = Dialog;
  Locale.install(app);
};

export default Dialog;
