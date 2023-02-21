const { fstat } = require('fs');
const http =require('http');
const fs = require
const server=http.createServer((req,res)=>{
    const url=req.url;


    if(url==='/'){
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Form</title></head>')
    res.write(`<body>
    <form action="/message" method="POST">
    <input type="text" name="message"><input>
    <input type="submit" value="Send"><input>
    </form>
    </body>`)
    res.write('</html>')
    return res.end();
    }
    if(url==="/message" && method=='POST'){
        {
            
        }
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><h1>Hello from Node<h1></body>')
    res.write('</html>')
    res.end();
});
server.listen(4000);