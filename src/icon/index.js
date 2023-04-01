import Icon from './icon.vue';
import './style';

Icon.install = (app) => {
  app.component(Icon.name, Icon);
};

export default Icon;
