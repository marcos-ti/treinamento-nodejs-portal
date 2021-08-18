module.exports.index = function(application, req, res) {
    // Criando conexao com DB
    var connection = application.config.dbConnection();
    // Instanciando NoticiasDAO que contem funcoes manipula tabela noticia
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    // Recupera 5 ultimas noticias
    noticiasModel.get5UltimasNoticias(function(error, result) {
        res.render("home/index", {noticias : result});
    });
};