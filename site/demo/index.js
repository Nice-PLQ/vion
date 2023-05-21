import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DemoDoc from './components/Demo.vue';
import DemoDocument from './components/DemoDocument.vue';
import { isWin } from '../util';

// 组件
import vion from '@/index';
import '@/style/index.less';
import '@/style/util.less';

if (isWin) {
  document.documentElement.classList.add('is-win');
}

const app = createApp(App);

app.use(vion);
app.use(router);
app.component(DemoDoc.name, DemoDoc);
app.component(DemoDocument.name, DemoDocument);

app.mount('#app');
