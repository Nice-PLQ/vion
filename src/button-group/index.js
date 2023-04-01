import ButtonGroup from './button-group.vue';
import './style';

ButtonGroup.install = (app) => {
  app.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
