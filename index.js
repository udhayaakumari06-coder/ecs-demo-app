const http = require("http");

http.createServer((req, res) => {
  res.end("Hello Auto Deploy ");
}).listen(80);
