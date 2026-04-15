const http = require("http");

http.createServer((req, res) => {
  res.end("Hello CI/CD fresh");
}).listen(80);
