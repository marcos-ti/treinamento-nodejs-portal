// incorporando a biblioteca http com a funcao require
var http = require('http');
// criando um servidor com o metodo createServer
var server = http.createServer(function( req, resp){
// Resgata as urls das categorias que serao criadas (após o parametro req)
    var categoria = req.url;
    
    if (categoria == `/tecnologia`){
        resp.end("<html><body>Notícias de Tecnologia</body></html>");

    } else if (categoria == `/moda`){
        resp.end("<html><body>Notícias de Moda</body></html>");
    
    } else if (categoria == `/beleza`){
        resp.end("<html><body>Notícias de Beleza</body></html>");
    } else {
        resp.end("<html><body>Portal de notícias</body></html>");
    }

    
});

server.listen(3000);