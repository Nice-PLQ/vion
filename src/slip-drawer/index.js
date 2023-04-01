import SlipDrawer from './slip-drawer.vue';
import './style';

SlipDrawer.install = (app) => {
  app.component(SlipDrawer.name, SlipDrawer);
};

export default SlipDrawer;
