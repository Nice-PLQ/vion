import Badge from './badge.vue';
import './style';

Badge.install = (app) => {
  app.component(Badge.name, Badge);
};

export default Badge;
