import mergeWith from 'lodash/mergeWith';

export default (target, source) => (
  mergeWith(target, source, (target, source) => (
    Array.isArray(target) ? [].concat(target, source) : source
  ))
);