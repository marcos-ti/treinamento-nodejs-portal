// incorporando a biblioteca http com a funcao require
var http = require('http');
// criando um servidor com o metodo createServer
var server = http.createServer(function( req, resp){
    resp.end("<html><body>Portal de notícias</body></html>");
});

server.listen(3000);