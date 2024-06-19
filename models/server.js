// Servidor de Express
const express  = require('express');
const http     = require('http');
const path     = require('path');
const { dbConnection } = require('../database/config');
const publicRoutes = require('../routes/public');
// const cors = require('cors');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Connect DB
        dbConnection();

        // Http server
        this.server = http.createServer( this.app );
    }

    middlewares() {
        // Display the public directory
        // this.app.use( '/uploads', express.static( path.resolve( __dirname, '../uploads' ) ) );

        // TO DO: CORS
        // this.app.use( cors() );

        // Parse body
        this.app.use( express.json() );

        // Parse URL-encoded bodies (x-www-form-urlencoded)
        this.app.use( express.urlencoded({ extended: true }) );

        // API endpoints
        this.app.use( '/api', publicRoutes );
    }

    execute() {

        // Initialize Middlewares
        this.middlewares();

        // Initialize Server
        this.server.listen( this.port, () => {
            console.log('Server running at port:', this.port );
        });
    }

}

module.exports = Server;