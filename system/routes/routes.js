let routes = require('express').Router();
const express = require('express');
let general = require('../../app/controllers/controller')
let carrito = require('../../app/controllers/ControllerCarrito')
let productos = require('../../app/controllers/ControllerProductos')

// RUTAS EN GENERAL

routes.get('/obtener', general.obtener)

routes.get('/obtener/:id', general.obtenerID)

routes.get('/guardar/:id/:nombre/:apellido', general.insertar)

routes.post('/guardarM', express.json({type: '*/*'}), general.insertarMuchos)

// RUTAS PARA EL CARRITO

routes.get('/CarritoObtiene/:id', carrito.carritoUsuario)

routes.get('/CarritoElimina/:id', carrito.eliminaCarrito)

// RUTAS PARA PRODUCTOS 

routes.get('/ObtenerAlfajores/', productos.obtiene_Alfajores)

routes.get('/ObtenerRoles/', productos.obtiene_Roles)

routes.get('/ObtenerGalletas/', productos.obtiene_Galletas)

module.exports = routes;