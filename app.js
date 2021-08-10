// Recuperando app
var app = require('./config/server');

// Incluindo um modulo dentro da aplicacao
var rotaNoticias = require('./app/routes/noticias');
// Executando a funcao passando app como parametro
rotaNoticias(app);
// Diminuindo codigo require
var rotaHome = require('./app/routes/home')(app); // Retorna a excucao da funcao


var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormularioInclusaoNoticia(app);

// Chamando a porta com Listen atraves de uma funcao de callback
app.listen(3000, function(){
    console.log(`Servidor ON`);
});