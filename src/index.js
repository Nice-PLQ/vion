import * as components from './components';

const install = (app) => {
  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
};

// eslint-disable-next-line no-undef
const version = typeof __VERSION__ === 'undefined' ? '' : __VERSION__;

export * from './components';
export default { install, version };
