// incorporando o framework para aplicacoes web EXPRESS com a funcao require
var express = require('express');

// fazendo o retorno da funcao express
var app = express();

// Apontamento para o renderizador de html EJS
app.set('view engine', 'ejs');

// Com EJS instalado, usamos o metodo render
app.get('/', function(req, res){
    res.render(`home/index`);
})

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render(`admin/form_add_noticia`);
})

app.get('/noticias', function(req, res){
    res.render(`noticias/noticias`);
})


// Chamando a porta com Listen atraves de uma funcao de callback
app.listen(3000, function(){
    console.log(`Servidor rodando com Express`);
});