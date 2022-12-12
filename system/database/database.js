const mysql = require('mysql')
const fs = require('fs')
const ini = require('ini')

var config = ini.parse(fs.readFileSync('system/config/config.ini', 'utf-8'))

var conexion = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
})

conexion.connect(error => {
    if(error) throw error;
    console.log('Database conectada')
});

setInterval(function () {
    conexion.query('SELECT 1');
}, 2000);


module.exports = {
    conexion
}

/*
host = "us-cdbr-east-06.cleardb.net"
user = "b0d9b08934315a"
password = "1784882b"
database = "heroku_7e73c89d1e1685b"
*/ 