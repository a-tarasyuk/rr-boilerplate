const initialState = [
  { name: 'React', url: 'https://facebook.github.io/react' },
  { name: 'Redux', url: 'https://github.com/rackt/redux' },
  { name: 'React Router', url: 'https://github.com/reactjs/react-router' },
  { name: 'React Router Redux', url: 'https://github.com/reactjs/react-router-redux' },
  { name: 'Webpack', url: 'https://webpack.github.io' },
  { name: 'Babel', url: 'https://babeljs.io' }
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