import test from 'tapava';
import getPackageJsonFromRegistry from './lib';

test('getPackageJsonFromRegistry(), user/repo#ref', function * (t) {
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

test('cached, user/repo#ref', function * (t) {
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
