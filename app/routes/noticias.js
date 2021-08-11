 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(app) {

     // Encapsulando a instrucao de DB
    app.get('/noticias', function(req, res){

        // Conectando com o DB via modulo Mysql
        var mysql = require('mysql');
        // createConnection com parametros em estrutura Json chave : valor
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234',
            database : 'portal_noticias'
        });

        connection.query('select * from noticias', function(error, result){
            //enviar os resultados da consulta
            res.send(result);
        });    
        //res.render(`noticias/noticias`);
    });
 };
    