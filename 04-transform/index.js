'use strict';

const through2 = require('through2');


function transform(chunk, enc, cb) {
  this.push(chunk.toString().toUpperCase());
  cb();
}

function flush(cb) {
  cb();
}


const stream = through2(transform, flush);

process.stdin.pipe(stream).pipe(process.stdout);
