const path=require('path');
pathObj=path.parse(__filename);
console.log(pathObj);

console.log(path.extname('data.json'));//Returns the extention of the file

console.log(
 path.format(   {
        root: '/',
        dir: '/home/asplap3275/Desktop/Angular/Node',
        base: 'pathModule.js',
        ext: '.js',
        name: 'pathModule'
      })
);//Returns the file path
console.log(path.isAbsolute('/'));


console.log(path.join('df','wref','rf'));
//Joins a path  directory