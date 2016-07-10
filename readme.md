# get-package-json-from-registry

Get a package.json from the registry, cached.

## module

```shell
npm install [--save] get-package-json-from-registry
```

```js
import getPackageJson from 'get-package-json-from-registry';

// these 2 will result in one query to the registry since we have a cache
getPackageJson('snappy@2').then(json => console.log(json));
getPackageJson('snappy@~1.1.0').then(json => console.log(json));

// calls will be cached in this instance
const getPackageJsonCached = getPackageJson.cached();

// these 2 will result in one query to the registry since we have a cache
getPackageJsonCached('snappy@2').then(json => console.log(json));
getPackageJsonCached('snappy@~1.1.0').then(json => console.log(json));
```

## cli

```shell

npm -g install get-package-json-from-registry

get-package-json-from-registry snappy@2
get-package-json-from-registry snappy@~1.1.0
```
