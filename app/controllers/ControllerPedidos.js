const modelProductos = require('../models/ModelPedidos')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.ObtenerPedido = function(req, res){
    return modelProductos.ObtenerP(req, res);
}

module.exports.ActualizarPedido = function(req, res){
    return modelProductos.ActualizarP(req, res);
}

module.exports.EliminarPedido = function(req, res){
    return modelProductos.EliminarP(req, res);
}