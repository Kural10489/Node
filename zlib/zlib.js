const fs=require('fs');
const zlib=require('zlib')
const gzip=zlib.createGzip();
const inp=fs.createReadStream('dummy.txt')
const out=fs.createWriteStream('dummy.txt.gz')
inp.pipe(gzip).pipe(out)
