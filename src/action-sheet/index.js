import ActionSheet from './action-sheet.vue';
import Locale from '../locale';
import './style';

ActionSheet.install = (app) => {
  app.component(ActionSheet.name, ActionSheet);
  Locale.install(app);
};

export default ActionSheet;
