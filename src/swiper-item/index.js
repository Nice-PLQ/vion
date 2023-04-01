import SwiperItem from './swiper-item.vue';
import './style';

SwiperItem.install = (app) => {
  app.component(SwiperItem.name, SwiperItem);
};

export default SwiperItem;
