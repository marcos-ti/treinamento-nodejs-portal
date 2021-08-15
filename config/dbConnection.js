// Modularizando (Refactoring) a conexao com DB
// Conectando com o DB via modulo Mysql
        var mysql = require('mysql');

        // Criando um Wrapper
        var connMYSQL = function() {
            console.log('Conexao foi estabelecida')
            // createConnection com parametros em estrutura Json chave : valor
            return mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '1234',
                database : 'portal_noticias'
            });
        }

        module.exports = function () {
            console.log('O auto load carregou o módulo de conexão com o DB')
           return connMYSQL;
}