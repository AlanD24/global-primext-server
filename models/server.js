// Servidor de Express
const express  = require('express');
const http     = require('http');
const { dbConnection, syncronizeDB } = require('../database/config');
const publicRoutes = require('../routes/public');
const cors = require('cors');
const logger = require('morgan');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Connect DB
        dbConnection();
        syncronizeDB();

        // Http server
        this.server = http.createServer( this.app );
    }

    middlewares() {
        // Enable cors
        this.app.use( cors() );

        // Print petitions in console
        this.app.use( logger("dev") );

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