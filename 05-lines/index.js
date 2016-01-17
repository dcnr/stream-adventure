'use strict';

const split = require('split');
const through2 = require('through2');


let should_upper_case = false;


function transform(chunk, _, next) {
  chunk = chunk.toString();

  if (should_upper_case) {
    this.push(chunk
      .toUpperCase() + '\n');
  }
  else {
    this.push(chunk
      .toLowerCase() + '\n');
  }

  should_upper_case = !should_upper_case;
  next();
}


function flush(done) {
  done();
}


process.stdin
  .pipe(split())
  .pipe(through2(transform, flush))
  .pipe(process.stdout);
