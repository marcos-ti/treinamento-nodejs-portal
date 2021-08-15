 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(aplication) {

     // variavel com atribuicao da execucao da funcao
    

     // Encapsulando a instrucao de DB
     aplication.get('/noticias', function(req, res){

        var connection = aplication.config.dbConnection();
        var noticiasModel = aplication.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            //EJS criando views dinamicas com JS
            res.render(`noticias/noticias`, {noticias : result}); // noticias é como uma var
        });       
    });
 };
    