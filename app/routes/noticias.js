 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(application) {

     // variavel com atribuicao da execucao da funcao
    

     // Encapsulando a instrucao de DB
     application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            //EJS criando views dinamicas com JS
            res.render(`noticias/noticias`, {noticias : result}); // noticias é como uma var
        });       
    });
 };
    