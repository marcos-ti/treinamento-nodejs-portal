module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;
        
        // Validando com Express Validator
        req.assert('titulo', 'O título é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor', 'O autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'A data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'A noticia é obrigatória').notEmpty();

        var erros = req.validationErrors(); // validationErrors retorna true

        if(erros){
            res.render('admin/form_add_noticia');
            return; // return vazio para não executar o processo seguinte
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}