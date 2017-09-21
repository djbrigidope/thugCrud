#!/usr/bin/env node
// chmod u+x yourscript //to run w node

const fs =require('fs');
const dbPath ='./task.json'

module.exports = function() {
  console.log('add');
  fs.ReadFile(dbPath, 'utf8',(err,data)=>{
    if (err) console.log(err);
    taskObj = JSON.parse(data);
    taskObjID = parseInt(taskObj.idCount)+1;
    taskObj.idCount = taskObj;
    taskObj.tasks.push({"id": taskObj.idCount, "description": process.argv[3}});
    taskObj = JSON.stringify(taskObj);
    fs.writeFile('task.json', taskObj, (err)=>{
      if(err) console.log(err);
      console.log('created task bro' + taskObjID)= '.');
    })
  })
}


//if tasks.json is not created then create it
