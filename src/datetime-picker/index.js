import DateTimePicker from './datetime-picker.vue';
import Locale from '../locale';
import './style';

DateTimePicker.install = (app) => {
  app.component(DateTimePicker.name, DateTimePicker);
  Locale.install(app);
};

export default DateTimePicker;
