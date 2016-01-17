'use strict';

const concat = require('concat-stream');

process.stdin
  .pipe(concat(data =>
    console.log(
      data
      .toString()
      .split('')
      .reverse()
      .join('')
    )
  ));
