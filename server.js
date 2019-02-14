//Imports

    const express = require('express');
    const body_parser = require('body-parser');
    require('dotenv').config();
    const ejs = require('ejs');
    const path = require ('path');

//Configuration

    const serveur = express();
    const port = process.env.PORT;

//Démarrer le serv

serveur.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});