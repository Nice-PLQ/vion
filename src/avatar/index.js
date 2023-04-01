import Avatar from './avatar.vue';
import './style';

Avatar.install = (app) => {
  app.component(Avatar.name, Avatar);
};

export default Avatar;
