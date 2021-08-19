function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY dat_criacao DESC', callback);
}


NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id_noticia);
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

// 5 ultimas noticias get5UltimasNoticias
NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by dat_criacao desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}