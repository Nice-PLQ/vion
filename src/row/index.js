import Row from './row.vue';
import './style';

Row.install = (app) => {
  app.component(Row.name, Row);
};

export default Row;
