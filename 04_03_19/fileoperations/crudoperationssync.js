//including the file system module
const fs = require('fs');
let names = 'But still I\'m having memories of high speeds when the cops crashed\n' +  
 'As I laugh, pushin the gas while my Glocks blast\n' + 
 'We was young and we was dumb but we had heart';

console.log(names)

//creating the new file
fs.writeFileSync('names.txt',names)


//reading the content from the file.
fs.readFileSync('names.txt',function (err,data) {
    if(err)
    throw err;
    console.log(data.toString())
    
})