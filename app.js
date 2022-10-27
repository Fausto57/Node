const express = require('express')

const app = express()

const start = require('./system/core/start')(app);

/*
const bodyParser = require('body-parser')
const mysql = require('mysql')
const fs = require('fs')
const ini = require('ini')
const etag = require('etag')
const sqlstring = require('sqlstring')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())


app.listen(port, () => console.log(`Corriendo en el puerto ${port}!`))
*/