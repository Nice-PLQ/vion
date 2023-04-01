import Col from './col.vue';
import './style';

Col.install = (app) => {
  app.component(Col.name, Col);
};

export default Col;
