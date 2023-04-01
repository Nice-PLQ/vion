import { createRouter, createWebHashHistory } from 'vue-router';
import { kebabCase } from '../util';
import components from './config';

const routes = [];

components.forEach((item) => {
  const name = kebabCase(item.alias || item.name);
  routes.push({
    name,
    path: `/${name}`,
    component: item.component,
    meta: { title: item.label }
  });
});

routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/intro'
});

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
