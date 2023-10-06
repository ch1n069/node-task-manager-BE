const app = require("./app");
const http = require("http");
const port = 3000;

// constant for the server
const server = http.createServer(app);
server.listen(port);
