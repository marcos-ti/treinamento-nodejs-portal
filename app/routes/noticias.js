 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(app) {

     // variavel com atribuicao da execucao da funcao
    

     // Encapsulando a instrucao de DB
    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(error, result){
            //EJS criando views dinamicas com JS
            res.render(`noticias/noticias`, {noticias : result}); // noticias é como uma var
        });    
        
    });
 };
    