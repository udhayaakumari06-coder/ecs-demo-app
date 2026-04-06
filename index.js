const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from AWS EC2 🚀 ");
}).listen(80);