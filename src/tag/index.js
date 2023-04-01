import Tag from './tag.vue';
import './style';

Tag.install = (app) => {
  app.component(Tag.name, Tag);
};

export default Tag;
