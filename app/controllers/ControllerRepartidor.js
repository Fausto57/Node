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

module.exports.ModificaEstatusTer = function(req, res){
    return model.ModificaEstatusTer(req.body.idLineaPedido, res);
}

module.exports.ModificaEstatusEnt = function(req, res){
    return model.ModificaEstatusEnt(req.body.idLineaPedido, res);
}