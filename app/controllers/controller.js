const model = require('../models/model')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.obtener = function(req, res){
    return model.Obtener(req, res);
}

module.exports.obtenerID = function(req, res){
    return model.ObtenerID(req, res);
}

module.exports.insertar = function(req, res){
    return model.Insertar(req, res);
}

module.exports.insertarMuchos = function(req, res){
    console.log(req.body.id, req.body.nombre, req.body.apellido)
    return model.InsertarMuchos(req.body.id, req.body.nombre, req.body.apellido);
}