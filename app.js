const express = require('express')

const app = express()

const start = require('./system/core/start')(app);

const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
