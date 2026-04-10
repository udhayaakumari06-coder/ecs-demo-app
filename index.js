const http = require("http");

http.createServer((req, res) => {
  res.end("Hello CI/CD Deployment ");
}).listen(80);
