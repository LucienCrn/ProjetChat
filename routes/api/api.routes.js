/* 
Imports
*/
const express = require('express');
const router = express.Router();
//

/* 
Cofiguration
*/
class ApiRouterClass{
    routes(){

        router.get( '/', (req, res) => {
            res.json({ msg: 'Hello API' })
        })

        router.post('/register', (req, res) => {
            // Récupérer les données de l'utilisateurs
            // Vérifier les données de la requête
            if(
                req.body.email != undefined && req.body.email.length > 4 &&
                req.body.password != undefined && req.body.password.length > 4 &&
                req.body.pseudo != undefined && req.body.pseudo.length > 1
            ){
                res.json(req.body);
            }
            else{
                res.json({ msg: 'Bad fields provided' });
            }
        });

        router.post('/login', (req, res) => {
            res.json('login');
        });
    }

    init(){
        this.routes();
        return router
    }
}
//

/* 
Export
*/
module.exports = ApiRouterClass;
//