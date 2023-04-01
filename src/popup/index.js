import Popup from './popup.vue';
import './style';

Popup.install = (app) => {
  app.component(Popup.name, Popup);
};

export default Popup;
