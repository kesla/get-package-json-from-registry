# get-package-json-from-registry

Get a package.json from the registry, cached.

## module

```shell
npm install [--save] get-package-json-from-registry
```

```js
import setupGetPackageJson from 'get-package-json-from-registry';

// calls will be cached in this instance
const getPackageJson = setupGetPackgeJson();

// these 2 will result in one query to the registry since we have a cache
getPackageJson('snappy@2').then(json => console.log(json));
getPackageJson('snappy@~1.1.0').then(json => console.log(json));
```

## cli

```shell

npm -g install get-package-json-from-registry

get-package-json-from-registry snappy@2
get-package-json-from-registry snappy@~1.1.0
```
