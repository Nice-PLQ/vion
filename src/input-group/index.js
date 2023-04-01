import InputGroup from './input-group.vue';
import './style';

InputGroup.install = (app) => {
  app.component(InputGroup.name, InputGroup);
};

export default InputGroup;
