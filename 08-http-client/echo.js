'use strict';

const http = require('http');

http.createServer((req, res) => {
    req.pipe(res);
  })
  .listen(8000);
