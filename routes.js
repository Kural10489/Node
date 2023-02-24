const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(`<body>
<form action="/message" method="POST">
<input type="text" name="message">
<input type="submit" value="Send">
</form>
</body>`);
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString().split("=");
      const message = parsedBody[1];
      fs.writeFileSync("formdata.txt", `Name:` + message);
    });
    fs.writeFileSync("hello.txt", "Dummy");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node</title></head>");
  res.write("<body><h1>Hello from Node<h1></body>");
  res.write("</html>");
  res.end();
};

module.exports={handler:requestHandler,text:`Check`}

