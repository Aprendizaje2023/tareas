const CreateServer = require('./src/config/server');
const { ConnectDatabase } = require('./src/config/connection');

const server = new CreateServer();
server.start();

const database = new ConnectDatabase();
database.connect();