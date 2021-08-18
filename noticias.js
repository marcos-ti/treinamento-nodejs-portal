// incorporando a biblioteca http com a funcao require
var http = require('http');
// criando um servidor com o metodo createServer / requisicao e resosta
var server = http.createServer(function(req, res){
// Resgata as urls das categorias que serao criadas (após o parametro req)
    var categoria = req.url; // url: se refere ao que vem depois da /
    
    if (categoria == `/tecnologia`){
        res.end("<html><body>Notícias de Tecnologia</body></html>"); // end: printa o html (resosta)

    } else if (categoria == `/moda`){
        res.end("<html><body>Notícias de Moda</body></html>");
    
    } else if (categoria == `/beleza`){
        res.end("<html><body>Notícias de Beleza</body></html>");
    } else {
        res.end("<html><body>Portal de notícias</body></html>");
    }

    
});

server.listen(3000); // listen: Verifica a porta 3000 (defalt)