var net = require('net');

var server=net.createServer((connection)=>{
    console.log("Client Connected");
    connection.on('end',()=>{
        console.log(`client is disconnected`);
    });
    connection.write(`hello World!\r\n`);
    connection.pipe(connection);
    
});
server.listen(9080,()=>{
    console.log(`Server is Listening..`);
})
