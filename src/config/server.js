const express = require('express');
class CreateServer {
    constructor(){
        this.app = null;
        this.port= 3000;
    }

    start(){
        this.app = express();
        this.app.use(express.json());
        this.app.use('/', (req, res) => {
            res.send("Hola Mundo!")
        });
        this.app.listen(this.port, () => {
            console.log(`Running at http://localhost:${this.port}`);
        })
    }
};

module.exports = CreateServer;