const model = require('../models/ModelProductos')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.obtiene_Alfajores = function(req, res){
    return modelProductos.ObtenerAlfajores(req, res);
}

module.exports.obtiene_Galletas = function(req, res){
    return modelProductos.ObtenerGalletas(req, res);
}

module.exports.obtiene_Roles = function(req, res){
    return modelProductos.ObtenerRoles(req, res);
}
