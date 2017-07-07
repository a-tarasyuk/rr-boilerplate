const initialState = [{
  name: 'React',
  href: 'https://facebook.github.io/react',
}, {
  name: 'Redux',
  href: 'https://github.com/rackt/redux',
}, {
  name: 'React Router Dom',
  href: 'https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom',
}, {
  name: 'React Router Redux',
  href: 'https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux',
}, {
  name: 'Webpack-3',
  href: 'https://webpack.github.io',
}, {
  name: 'Babel',
  href: 'https://babeljs.io',
}, {
  name: 'CSS-Modules',
  href: 'https://github.com/css-modules/css-modules',
}];


/**
 * Features
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
function features(state = initialState) {
  return state;
}

export default features;
