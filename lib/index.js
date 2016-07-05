import Cache from 'async-cache-promise';
import getNpmRegistryPackage from 'get-npm-registry-package';
import resolveNpmVersion from 'resolve-npm-version';
import npa from 'npm-package-arg';

module.exports = () => {
  const cache = new Cache({
    load: getNpmRegistryPackage
  });

  return arg => {
    const {name, rawSpec} = npa(arg);

    return cache.get(name)
      .then(data => resolveNpmVersion(data, rawSpec));
  };
};
