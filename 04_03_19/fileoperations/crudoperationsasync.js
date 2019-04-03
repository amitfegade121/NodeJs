//including the file system module
const fs = require('fs');

//creating the new file using appendFile() function
fs.appendFile('textFile.txt','Hello Mrudula!',function (error) {
    if (error) {
        throw(error);
     }  
    console.log('file saved');    
});

//creating new file with writeFile() function
fs.writeFile('newFile.txt','Hello System');

//reading the content from the file.
fs.readFile('newFile.txt',function (err,data) {
    if(err)
    throw err;
    console.log(data.toString())
    
})
//deleting the file
fs.unlink('newFile.txt',function (err) {
    if(err) throw err
    console.log("deleted")
})

