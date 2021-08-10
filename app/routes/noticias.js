 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(app) {
    app.get('/noticias', function(req, res){
        res.render(`noticias/noticias`);
    });
 }
    