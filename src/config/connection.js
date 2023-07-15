const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: 'mysql',
    }
);

class ConnectDatabase {
    constructor(){
        this.sequelize = sequelize;
    }
    async connect(){
       try{
        await this.sequelize.authenticate();
        console.log("Connect database");
       } 
       catch(err){
        console.log("Failed Connected", err.message);
       } 
    }
};

module.exports = { ConnectDatabase };




