import Tabbar from './tabbar.vue';
import './style';

Tabbar.install = (app) => {
  app.component(Tabbar.name, Tabbar);
};

export default Tabbar;
