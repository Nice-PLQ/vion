import { ref } from 'vue';
import defaultMessages from './lang/zh-CN';

const langRef = ref('zh-CN');
let message = {
  'zh-CN': defaultMessages,
};

const i18n = {
  use(lang, messages) {
    if (messages) {
      this.add({ [lang]: messages });
    }
    langRef.value = lang;
  },
  add(newMessage = {}) {
    message = { ...message, ...newMessage };
  },
  translate(key) {
    return message[langRef.value][key];
  },
  change(lang) {
    langRef.value = lang;
  },
};

i18n.install = (app) => {
  app.config.globalProperties.$locale = i18n;
};

export default i18n;
