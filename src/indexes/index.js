import Indexes from './indexes.vue';
import './style';

Indexes.install = (app) => {
  app.component(Indexes.name, Indexes);
};

export default Indexes;
