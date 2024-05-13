#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];
const str_to_write = process.argv[3]

fs.writeFile(filePath, str_to_write, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('${filePath}');
});
