import ListGroup from './list-group.vue';
import './style';

ListGroup.install = (app) => {
  app.component(ListGroup.name, ListGroup);
};

export default ListGroup;
