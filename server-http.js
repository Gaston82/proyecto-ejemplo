const { env, port } = require("./config");
const http = require("http");
const server = http.createServer();

server.on("request", (request, response) => {
  response.statusCode = "200";
  response.end("Hola mundo");
});

server.listen(port);
console.log(env);
console.log(`Servidor corriendo en el puerto ${port}`);
