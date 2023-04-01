import NoticeBar from './notice-bar.vue';
import Locale from '../locale';
import './style';

NoticeBar.install = (app) => {
  app.component(NoticeBar.name, NoticeBar);
  Locale.install(app);
};

export default NoticeBar;
