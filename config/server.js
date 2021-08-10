// incorporando o framework para aplicacoes web EXPRESS com a funcao require
var express = require('express');

// fazendo o retorno da funcao express
var app = express();

// Apontamento para o renderizador de html EJS
app.set('view engine', 'ejs');

// Setando o diretorio de views padrao
app.set('views', './app/views');

// Modulo retornando a variavel app
module.exports = app;