const model = require('../models/model')

module.exports.obtener = function(req, res){
    return model.Obtener(req, res);
}

module.exports.obtenerID = function(req, res){
    return model.ObtenerID(req, res);
}

module.exports.insertar = function(req, res){
    return model.Insertar(req, res);
}