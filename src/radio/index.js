import Radio from './radio.vue';
import './style';

Radio.install = (app) => {
  app.component(Radio.name, Radio);
};

export default Radio;
