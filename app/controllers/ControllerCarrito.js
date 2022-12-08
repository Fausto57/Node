const model = require('../models/ModeloCarrito')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.carritoUsuario = function(req, res){
    return model.CarritoU(req, res);
}

module.exports.eliminaCarrito = function(req, res){
    return model.EliminaC(req, res);
}

module.exports.AgregaAlCarrito = function(req, res){
    return model.AgregaC(req.body.idUser, req.body.Cantidad, req.body.idCatalogo, res);
}

module.exports.AgregaPasteles = function(req, res){
    return model.AgregaCPasteles(req.body.idUser, req.body.Tamaño, req.body.Estilo, 
        req.body.Fecha, req.body.Descripcion, req.body.Imagen, req.body.idProd, res);
}

module.exports.obtenerPedido = function(req, res){
    return model.ObtenerPedidos(req, res);
}

module.exports.obtenerCarrito = function(req, res){
    return model.ObtenerCarrito(req, res);
}

module.exports.pagarCarrito = function(req, res){
    return model.PagarCarrito(req, res);
}