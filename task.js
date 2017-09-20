const fs = require('fs');
const list = require('./commands/list.js');
const remove = require('./commands/delete.js');
const add = require('./commands/add.js');
const complete = require('./commands/complete.js');
const input = process.argv[2];

if(input === 'list'){
  list();
}

if(input === 'add'){
  add();
}

if(input === 'complete'){
  complete();
}

if(input === 'remove'){
  remove();
}



// add();
// list();
// remove();
// complete();
