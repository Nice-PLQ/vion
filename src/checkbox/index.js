import Checkbox from './checkbox.vue';
import './style';

Checkbox.install = (app) => {
  app.component(Checkbox.name, Checkbox);
};

export default Checkbox;
