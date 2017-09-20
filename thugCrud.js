#!/usr/bin/env node
// chmod u+x yourscript //to run w node
//rap names for babies
const name = process.argv[2];
let thugNames = ['kyle','lil uzi vert', 'lil tunchy', 'thugnificent', ''];


Array.prototype.read = function() {
  this.forEach(function(name,index)){
    console.log(name,index);
  };
};
console.log('rap names for babies');
