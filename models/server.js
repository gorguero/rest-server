const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public') ) //Servimos nuestro html

    }

    routes(){
        this.app.use(this.usuarioPath , require('../routes/user')); 
    }

    listen(){
        this.app.listen( this.port , (req, res) => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }

}


module.exports = Server;