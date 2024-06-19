// Server Model: Contains all the configured express + socket.io server
const Server = require('./models/server');

// Package to read and set environment variables
require('dotenv').config();

// Initialize the server instance
const server = new Server();

// Execute server
server.execute();