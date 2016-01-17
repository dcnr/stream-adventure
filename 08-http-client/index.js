'use strict';

const request = require('http')
  .request;

let r = request({
  hostname: 'localhost',
  port: 8099,
  method: 'POST'
}, (res) => {
  res.pipe(process.stdout);
});


process.stdin
  .pipe(r);
