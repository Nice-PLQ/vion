import RadioGroup from './radio-group.vue';
import './style';

RadioGroup.install = (app) => {
  app.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
