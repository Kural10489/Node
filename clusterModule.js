// const http=require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{"content-type":"text/plain"});
//         res.end("Home Page");
//     }
//     else if (req.url==="/slowpage"){
//         for(let i=0;i<60000;i++){}
//         res.writeHead(200,{"content-type":"text/plain"});
//         res.end("slow Page");
//     }
// });
// server.listen(8080);

const cluster=require("cluster");
if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker ${process.pid} started`);
const http=require("http");
const os=require("os");
console.log(os.cpus().length);
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home Page");
    }
    else if (req.url==="/slowpage"){
        for(let i=0;i<600000;i++){}
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("slow Page");
    }
});
server.listen(8080);
}