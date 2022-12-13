const express = require('express')

const app = express()

const cors = require('cors');

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };

app.use(cors(corsOpts))

const start = require('./system/core/start')(app);
