import Button from './button.vue';
import './style';

Button.install = (app) => {
  app.component(Button.name, Button);
};

export default Button;
