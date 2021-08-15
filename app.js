// Recuperando app
var app = require('./config/server');

// Chamando a porta com Listen atraves de uma funcao de callback
app.listen(3000, function(){
    console.log(`Servidor ON`);
});