import Divider from './divider.vue';
import './style';

Divider.install = (app) => {
  app.component(Divider.name, Divider);
};

export default Divider;
