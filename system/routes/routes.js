let routes = require('express').Router();
const express = require('express');
let general = require('../../app/controllers/controller')
let carrito = require('../../app/controllers/ControllerCarrito')
let productos = require('../../app/controllers/ControllerProductos')
let repartidor = require('../../app/controllers/ControllerRepartidor')

// RUTAS EN GENERAL

routes.get('/obtener', general.obtener)

routes.get('/obtener/:id', general.obtenerID)

routes.get('/guardar/:id/:nombre/:apellido', general.insertar)

routes.post('/guardarM', express.json({type: '*/*'}), general.insertarMuchos)

// RUTAS PARA EL CARRITO

routes.get('/CarritoObtiene/:id', carrito.carritoUsuario)

routes.get('/CarritoElimina/:id', carrito.eliminaCarrito)

routes.post('/AgregarCarrito', express.json({type: '*/*'}), carrito.AgregaAlCarrito)

// RUTAS PARA PRODUCTOS 

routes.get('/ObtenerPasteles', productos.ObtenerPasteles)

routes.get('/ObtenerPastelesPersonalizados', productos.ObtenerPastelesPersonalizados)

routes.get('/ObtenerGalletas', productos.ObtenerGalletas)

routes.get('/ObtenerBollitos', productos.ObtenerBollitos)

routes.get('/ObtenerAlfajores', productos.ObtenerAlfajores)

routes.get('/ObtenerRoles', productos.ObtenerRoles)

// RUTAS PARA EL REPARTIDOR
routes.get('/OTerminados', repartidor.ObtenerTerminados)

routes.get('/OEntrega', repartidor.ObtenerEntregas)



module.exports = routes;