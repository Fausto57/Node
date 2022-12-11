const model = require('../models/ModelLogin')
const express = require('express');
const app = express()
app.use(express.json())

module.exports.Login = function(req, res){
    return model.LoginConsult(req.body.Correo, req.body.Contraseña, res);
}