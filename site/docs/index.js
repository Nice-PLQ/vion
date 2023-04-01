import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { isMobile, isWin } from '../util';
import Icon from '@/icon';
import '@/style/icon.less';
import '@/style/var.less';

// 移动端访问跳转到移动端首页
if (isMobile && window === top) {

}

if (isWin) {
  document.documentElement.classList.add('is-win');
}

const app = createApp(App);
app.use(Icon);
app.use(router);
app.mount('#app');
