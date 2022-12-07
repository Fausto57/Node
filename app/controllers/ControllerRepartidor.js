const modelProductos = require('../models/ModelRepartidor')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.ObtenerTerminados = function(req, res){
    return modelProductos.stTerminados(req, res);
}

module.exports.ObtenerEntregas = function(req, res){
    return modelProductos.stEntrega(req, res);
}