let routes = require('express').Router();
const express = require('express');
let cont = require('../../app/controllers/controller')

routes.get('/', function(req, res){
  res.json({
    status: true,
    message: "welcome"
  })
})

routes.get('/todos', function(req, res){
    res.json({
      status: true,
      message: "ruta"
    })
  })

routes.get('/obtener', cont.obtener)

routes.get('/obtener/:id', cont.obtenerID)

routes.get('/guardar/:id/:nombre/:apellido', cont.insertar)

routes.post('/guardarM', express.json({type: '*/*'}), cont.insertarMuchos)

module.exports = routes