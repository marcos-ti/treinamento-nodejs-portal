module.exports = function(application){

    application.get('/noticias', function(req,res){
        application.app.controllers.noticias.noticias(application, req, res);
    });

    // Refatorando rotas para Controller
    application.get('/noticia', function(req,res){
        application.app.controllers.noticias.noticia(application, req, res);
    });

};