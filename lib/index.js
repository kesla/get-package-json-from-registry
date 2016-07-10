import Cache from 'async-cache-promise';
import getNpmRegistryPackage from 'get-npm-registry-package';
import resolveNpmVersion from 'resolve-npm-version';
import npa from 'npm-package-arg';

const setup = get => {
  return arg => {
    const {name, rawSpec} = npa(arg);

    return get(name)
      .then(data => resolveNpmVersion(data, rawSpec));
  };
};

module.exports = setup(getNpmRegistryPackage);

module.exports.cached = () => {
  const cache = new Cache({
    load: getNpmRegistryPackage
  });

  return setup(name => cache.get(name));
};
