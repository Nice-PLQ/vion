module.exports = {
  // verbose: true,
  // bail: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(css|less)$': '<rootDir>/test/styleMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'src/**/*.vue',
    '!src/**/demo/**',
    '!src/**/util/**',
  ]
};
