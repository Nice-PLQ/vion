import Swiper from './swiper.vue';
import './style';

Swiper.install = (app) => {
  app.component(Swiper.name, Swiper);
};

export default Swiper;
