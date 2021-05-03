const http = require("http");

const requestListener = (request, response) => {
  const { method } = request;

  if (method === "GET") {
    response.end("<h1>Hello ini data dari hasil GET</h1>");
  }

  if (method === "POST") {
    response.end("<h1>Haii ini data dari hasil POST</h1>");
  }

  if (method === "PUT") {
    response.end("<h1>ini dari dari hasil PUT</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>ini data dari hasil DELETE</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
