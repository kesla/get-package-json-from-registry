#!/usr/bin/env node

var arg = process.argv[2];

require('../dist')(arg)
  .then(json => console.log(JSON.stringify(json, null, 2)))
  .catch(err => console.error(err));
