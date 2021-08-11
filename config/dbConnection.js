// Modularizando (Refactoring) a conexao com DB
// Conectando com o DB via modulo Mysql
        var mysql = require('mysql');

        module.exports = function () {
        // createConnection com parametros em estrutura Json chave : valor
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234',
            database : 'portal_noticias'
        });
}