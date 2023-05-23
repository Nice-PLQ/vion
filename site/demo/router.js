import { createRouter, createWebHashHistory } from 'vue-router';
import Launch from './components/Launch.vue';
import Index from './components/Index.vue';
import Color from './components/Color.vue';
import { kebabCase } from '../util';
import components from './config';

const routes = [{
  name: '首页',
  path: '/index',
  component: Index
}, {
  name: '色彩',
  path: '/color',
  component: Color
}];

components.forEach((item) => {
  const name = kebabCase(item.name);
  routes.push({
    name,
    path: `/${name}`,
    component: item.component,
    meta: { title: item.label }
  });
});

// routes.push({
//   path: '/:pathMatch(.*)*',
//   component: Launch
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.path === '/index') {
      return null;
    }
    return { x: 0, y: 0 };
  }
});

export default router;
