import test from 'tapava';
import getPackageJsonFromRegistry from './lib';
import npa from 'npm-package-arg';

test('getPackageJsonFromRegistry(), package@version', function * (t) {
  const packageJson = yield getPackageJsonFromRegistry('snappy@5.0.0');
  t.match(packageJson, {
    _requested: {
      raw: 'snappy@5.0.0',
      scope: null,
      escapedName: 'snappy',
      name: 'snappy',
      rawSpec: '5.0.0',
      spec: '5.0.0',
      type: 'version'
    },
    name: 'snappy',
    version: '5.0.0'
  });
});

test('getPackageJsonFromRegistry(), package@version from npa object', function * (t) {
  const packageJson = yield getPackageJsonFromRegistry(npa('snappy@5.0.0'));
  t.match(packageJson, {
    _requested: {
      raw: 'snappy@5.0.0',
      scope: null,
      escapedName: 'snappy',
      name: 'snappy',
      rawSpec: '5.0.0',
      spec: '5.0.0',
      type: 'version'
    },
    name: 'snappy',
    version: '5.0.0'
  });
});

test('cached, package@version', function * (t) {
  const cached = getPackageJsonFromRegistry.cached();
  const packageJson = yield cached('snappy@5.0.0');
  t.match(packageJson, {
    _requested: {
      raw: 'snappy@5.0.0',
      scope: null,
      escapedName: 'snappy',
      name: 'snappy',
      rawSpec: '5.0.0',
      spec: '5.0.0',
      type: 'version'
    },
    name: 'snappy',
    version: '5.0.0'
  });
});
