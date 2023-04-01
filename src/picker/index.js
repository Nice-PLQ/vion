import Picker from './picker.vue';
import Locale from '../locale';
import './style';

Picker.install = (app) => {
  app.component(Picker.name, Picker);
  Locale.install(app);
};

export default Picker;
