#!/usr/bin/env node

var arg = process.argv[2];

require('../dist')()(arg)
  .catch(err => console.error(err))
  .then(json => console.log(JSON.stringify(json, null, 2)));
