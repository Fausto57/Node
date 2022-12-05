const modelProductos = require('../models/ModelProductos')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.ObtenerPasteles = function(req, res){
    return modelProductos.Pasteles(req, res);
}

module.exports.ObtenerPastelesPersonalizados = function(req, res){
    return modelProductos.PastelesPersonalizados(req, res);
}

module.exports.ObtenerGalletas = function(req, res){
    return modelProductos.Galletas(req, res);
}

module.exports.ObtenerBollitos = function(req, res){
    return modelProductos.Bollitos(req, res);
}

module.exports.ObtenerAlfajores = function(req, res){
    return modelProductos.Alfajores(req, res);
}

module.exports.ObtenerRoles = function(req, res){
    return modelProductos.Roles(req, res);
}
