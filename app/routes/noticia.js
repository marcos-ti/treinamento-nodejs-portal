 // Modularizando a rota. Tem que chamar o app como paramentro na funcao
 module.exports = function(app) {

    // variavel com atribuicao da execucao da funcao
   

    // Encapsulando a instrucao de DB
   app.get('/noticia', function(req, res){

       var connection = app.config.dbConnection();

       connection.query('select * from noticias where id_noticia = 2', function(error, result){
           //EJS criando views dinamicas com JS
           res.render(`noticias/noticia`, {noticia : result}); // noticias é como uma var
       });    
       
   });
};
   