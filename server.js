const http = require("http");

const requestListener = (request, response) => {
  const { method } = request;

  if (method === "GET") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      response.end(`<h1>Hai, ini adalah data yang berhasil di tangkap:  ${body}! </h1>`);
    });
  }

  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name} data berhasil ditambahkan !!</h1>`);
    });
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
