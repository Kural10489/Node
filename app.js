const http =require('http');
const routes=require('./routes')
// console.log(routes.text);
// console.log('kural');
// console.log('wid');

const server=http.createServer(routes.handler);
server.listen(4000);