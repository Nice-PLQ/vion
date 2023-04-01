import Tooltips from './tooltips.vue';
import './style';

Tooltips.install = (app) => {
  app.component(Tooltips.name, Tooltips);
};

export default Tooltips;
