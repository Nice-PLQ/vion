import TabPanel from './tab-panel.vue';
import './style';

TabPanel.install = (app) => {
  app.component(TabPanel.name, TabPanel);
};

export default TabPanel;
