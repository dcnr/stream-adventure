'use strict';

const trumpet = require('trumpet');
const through2 = require('through2');

const tr = trumpet();

function transform(chunk, _, doneCb) {
  this.push(chunk.toString().toUpperCase());
  doneCb();
}

function flush(doneCb) {
  doneCb();
}

const elem = tr
  .select('.loud')
  .createStream();

  elem.pipe(through2(transform, flush))
  .pipe(elem);

process.stdin.pipe(tr).pipe(process.stdout);
