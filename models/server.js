const express = require("express");
const port = process.env.PORT;
const cors = require('cors')
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'

    //middlewares

    this.middlewares();

    //rutas de mi app
    this.routes();
  }

  routes() {
   this.app.use(this.usuariosPath, require('../routes/user'));
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(port, () => {
      console.log("App lanzandose desde el puerto", port);
    });
  }
}

module.exports = Server;
