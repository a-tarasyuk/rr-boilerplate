const initialState = [
  { name: 'React', href: 'https://facebook.github.io/react' },
  { name: 'Redux', href: 'https://github.com/rackt/redux' },
  { name: 'React Router', href: 'https://github.com/reactjs/react-router' },
  { name: 'React Router Redux', href: 'https://github.com/reactjs/react-router-redux' },
  { name: 'Webpack-2', href: 'https://webpack.github.io' },
  { name: 'Babel', href: 'https://babeljs.io' },
  { name: 'CSS-Modules', href: 'https://github.com/css-modules/css-modules' }
];

/**
 * Features
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
export function Features(state = initialState, action) {
  return state;
}