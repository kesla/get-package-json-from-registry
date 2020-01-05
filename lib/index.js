import getNpmRegistryPackage from 'get-npm-registry-package';
import resolveNpmVersion from 'resolve-npm-version';
import npa from 'npm-package-arg';
import {set} from 'immutable-object-methods';
import {keyCache as setupCache} from 'fast-cache';

const setup = get => {
  return arg => {
    const _requested = typeof arg === 'object' ? arg : npa(arg);
    const {name, rawSpec} = _requested;
    const spec = rawSpec || 'latest';

    return get(name)
      .then(data => set(resolveNpmVersion(data, spec), '_requested', _requested));
  };
};

module.exports = setup(getNpmRegistryPackage);

module.exports.cached = () => {
  const cache = setupCache(getNpmRegistryPackage);

  return setup(name => cache(name));
};
