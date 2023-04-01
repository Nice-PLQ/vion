import Input from './input.vue';
import './style';

Input.install = (app) => {
  app.component(Input.name, Input);
};

export default Input;
