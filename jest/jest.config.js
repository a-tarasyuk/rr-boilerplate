module.exports = {
  rootDir: '../',
  roots: ['<rootDir>/src'],

  moduleFileExtensions: [
    'js', 'jsx', 'json', 'node',
  ],

  moduleDirectories: ['node_modules'],

  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },

  setupFiles: [
    '<rootDir>/jest/enzyme.config.js',
  ],

  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.((t|j)sx?)$',
};
