import Tab from './tab.vue';
import './style';

Tab.install = (app) => {
  app.component(Tab.name, Tab);
};

export default Tab;
