const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from ECS ");
}).listen(80);
