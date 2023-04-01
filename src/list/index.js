import List from './list.vue';
import './style';

List.install = (app) => {
  app.component(List.name, List);
};

export default List;
