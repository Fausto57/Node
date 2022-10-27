let routes = require('express').Router();
const { Router } = require('express');
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

routes.get('/obtener', (req, res) => cont.obtener(req, res))

routes.get('/obtener/:id', (req, res) => cont.obtenerID(req, res))

routes.get('/guardar/:id/:nombre/:apellido', (req, res) => cont.insertar(req, res))


module.exports = routes