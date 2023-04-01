import SlipDrawerGroup from './slip-drawer-group.vue';
import './style';

SlipDrawerGroup.install = (app) => {
  app.component(SlipDrawerGroup.name, SlipDrawerGroup);
};

export default SlipDrawerGroup;
