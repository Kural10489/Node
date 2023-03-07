var net =require('net');

var client = net.connect({port:9080,function(req,res){
console.log("Connected to Server");

}});
client.on('data',(data)=>{
    console.log(data.toString());
    client.end();
});
client.on('end',()=>{
    console.log("Disconned from the server");
});