import InfiniteLoading from './infinite-loading.vue';
import Locale from '../locale';
import './style';

InfiniteLoading.install = (app) => {
  app.component(InfiniteLoading.name, InfiniteLoading);
  Locale.install(app);
};

export default InfiniteLoading;
