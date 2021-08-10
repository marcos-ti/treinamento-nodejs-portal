// Modularizando a rota
module.exports = function(app)  {
    // Com EJS instalado, usamos o metodo render
    app.get('/', function(req, res){
        res.render(`home/index`);
    });
}