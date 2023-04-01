const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: isTest
          ? {
            node: 'current'
          }
          : {
            browsers: [
              'Android >= 10.0',
              'iOS >= 10.0'
            ]
          }
      }
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
};
