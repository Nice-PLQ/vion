import SearchBar from './search-bar.vue';
import Locale from '../locale';
import './style';

SearchBar.install = (app) => {
  app.component(SearchBar.name, SearchBar);
  Locale.install(app);
};

export default SearchBar;
