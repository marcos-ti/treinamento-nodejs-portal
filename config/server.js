// incorporando o framework para aplicacoes web EXPRESS com a funcao require
var express = require('express');

// Trazendo a instancia do modulo do Consign
var consign = require('consign');

// fazendo o retorno da funcao express
var app = express();

// Apontamento para o renderizador de html EJS
app.set('view engine', 'ejs');

// Setando o diretorio de views padrao
app.set('views', './app/views');

// Inclusao do diretorio Routes
consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

// Modulo retornando a variavel app
module.exports = app;