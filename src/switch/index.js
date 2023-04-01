import Switch from './switch.vue';
import './style';

Switch.install = (app) => {
  app.component(Switch.name, Switch);
};

export default Switch;
