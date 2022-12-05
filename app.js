const express = require('express')

const app = express()

const start = require('./system/core/start')(app);

const cors = require('cors');

app.use(cors());
