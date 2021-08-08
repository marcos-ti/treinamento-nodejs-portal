// incorporando o framework para aplicacoes web EXPRESS com a funcao require
var express = require('express');

// fazendo o retorno da funcao express
var app = express();

// funcao de callback com o metodo Send (para Express, Node é End) para resolver o Cannot GET /
app.get('/', function(req, res){
    res.send(`<html><body>Portal de Notícias</body></html>`);
})

app.get('/tecnologia', function(req, res){
    res.send(`<html><body>Notícias de Tecnologia</body></html>`);
})

// Chamando a porta com Listen atraves de uma funcao de callback
app.listen(3000, function(){
    console.log(`Servidor rodando com Express`);
});