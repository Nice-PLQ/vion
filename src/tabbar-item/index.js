import TabbarItem from './tabbar-item.vue';
import './style';

TabbarItem.install = (app) => {
  app.component(TabbarItem.name, TabbarItem);
};

export default TabbarItem;
