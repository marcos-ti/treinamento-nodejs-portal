// incorporando o framework para aplicacoes web EXPRESS com a funcao require
var express = require('express');

// Trazendo a instancia do modulo do Consign
var consign = require('consign');

// Incluindo o Middleware Body Parser
var bodyParser = require('body-parser');

// Incluindo o Middleware Express Validator
var expressValidator = require('express-validator');

// fazendo o retorno da funcao express
var app = express();

// Apontamento para o renderizador de html EJS
app.set('view engine', 'ejs');

// Setando o diretorio de views padrao
app.set('views', './app/views');
// Incluindo arquivos estáticos
app.use(express.static('./app/public'));
// Incluindo Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// Inclusao do diretorio Routes
consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

// Modulo retornando a variavel app
module.exports = app;

// BodyParse esta no Express nas versoes mais novas

// var express = require('express');

// var consign = require('consign');

// var app = express();

// app.set('view engine', 'ejs');
// app.set('views', './app/views');

// app.use(express.urlencoded({extended: true}));

// consign()
//     .include('app/routes')
//     .then('config/dbConnection.js')
//     .then('app/models')
//     .into(app);
// module.exports = app;

