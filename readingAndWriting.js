// Reading and writing a file 
var fs=require('fs');
var fileName=process.argv[2];

fs.readFile(fileName,(content)=>{
    console.log(content.toString());
})
