import CheckboxGroup from './checkbox-group.vue';
import './style';

CheckboxGroup.install = (app) => {
  app.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;
