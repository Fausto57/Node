const model = require('../models/ModeloCarrito')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.carritoUsuario = function(req, res){
    return model.CarritoUsuario(req, res);
}

module.exports.eliminaCarrito = function(req, res){
    return model.EliminaCarrito(req, res);
}