const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-type", "text/html");
  response.setHeader('X-Powered-By', 'NodeJS');

  response.statusCode = 200;

  const { method, url } = request;

  // if (method === "POST") {
  //   let body = [];

  //   request.on("data", (chunk) => {
  //     body.push(chunk);
  //   });

  //   request.on("end", () => {
  //     body = Buffer.concat(body).toString();
  //     const { name } = JSON.parse(body);
  //     response.end(`<h1>Hai, ${name}!</h2>`);
  //   });
  // }

  if(url === '/'){
    if(method === 'GET'){
      response.statusCode = 200;
      response.end(JSON.stringify({
        message : `<h1>Ini adalah halaman homepage!!</h1>`
      }));
    }else{
      response.statusCode = 400;
      response.end(JSON.stringify({
        message : `<h1>Halaman tidak dapat di akses dengan ${method} request </h1>`
      }));
    }
  }else if(url === '/about'){
    if(method === 'GET'){
      response.statusCode = 200;
      response.end(JSON.stringify({
        message : `<h1>Ini adalah halaman about</h1>`
      }))
    }else if(method === 'POST'){
      let body = [];

      request.on('data',(chunk) => {
        body.push(chunk);
      });

      request.on('end',() => {
        body = Buffer.concat(body).toString();
        const {name} = JSON.parse(body);
        response.statusCode = 200;
        response.end(JSON.stringify({
          message : `<h1>hallo, ${name}! ini adalah halaman about</h1>`
        }));
      })

    }else{
      response.statusCode = 400;
      response.end(`<h1>Halaman tidak dapat di akses mengunakan ${method} request !!</h1>`);
      response.end(JSON.stringify({
        message : `<h1>Halaman tidak dapat di akses mengunakan ${method} request!!</h1>`
      }))
    }
  }else{
    response.statusCode = 404;
    response.end(JSON.stringify({
      message : 'Halaman Tidak ditemukan'
    }));
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
