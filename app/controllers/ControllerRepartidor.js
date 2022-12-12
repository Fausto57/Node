const ModelRepartidor = require('../models/ModelRepartidor')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.ObtenerTerminados = function(req, res){
    return ModelRepartidor.stTerminados(req, res);
}

module.exports.ObtenerEntregas = function(req, res){
    return ModelRepartidor.stEntrega(req, res);
}

module.exports.ModificaEstatusTer = function(req, res){
    return ModelRepartidor.UpdateEstatusTer(req.body['idLineaPedido'], res);
}

module.exports.ModificaEstatusEnt = function(req, res){
    return ModelRepartidor.UpdateEstatusEnt(req.body['idLineaPedido'], res);
}