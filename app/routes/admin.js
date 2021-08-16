// modularizando
module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render(`admin/form_add_noticia`);
    });
// Incluindo o modulo Body Parser para realizar a requisição no Body
application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
      
        
// Inserindo dados no DB
var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
           //Criando um redirect
           res.redirect('/noticias');
        });    


    });
}