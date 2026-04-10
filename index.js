const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from CI/CD deployment ");
}).listen(80);
