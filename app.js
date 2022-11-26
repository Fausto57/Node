const express = require('express')

const app = express()

const start = require('./system/core/start')(app);

module.exports = start(app);
