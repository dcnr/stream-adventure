'use strict';

const http = require('http');
const through = require('through2');

const port = process.argv[2];


function transform(chunk, _, next) {
  this.push(chunk.toString()
    .toUpperCase());
    
  next();
}


function flush(doneCb) {
  doneCb();
}


http
  .createServer((req, res) => {
    if (req.method === 'POST') {
      req
        .pipe(through(transform, flush))
        .pipe(res);
    }
  })
  .listen(port, 'localhost');
