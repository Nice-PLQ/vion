import Progress from './progress.vue';
import './style';

Progress.install = (app) => {
  app.component(Progress.name, Progress);
};

export default Progress;
