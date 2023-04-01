import NavBar from './nav-bar.vue';
import './style';

NavBar.install = (app) => {
  app.component(NavBar.name, NavBar);
};

export default NavBar;
