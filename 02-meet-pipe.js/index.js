'use strict';

const fs = require('fs');

const fp = process.argv[2];


fs.createReadStream(fp).pipe(process.stdout);
