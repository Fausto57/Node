const mysql = require('mysql')
const fs = require('fs')
const ini = require('ini')

var config = ini.parse(fs.readFileSync('system/config/config.ini', 'utf-8'))

var conexion = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    port: config.database.port,
    password: config.database.password,
    database: config.database.database
})

conexion.connect(error => {
    if(error) throw error;
    console.log('Database conectada')
});
/*
setInterval(function () {
    conexion.query('SELECT 1');
    console.log('Viva la conexion')
}, 5000);
*/
//var apiconfig = apiconfig;

module.exports = {
    conexion,
    //apiconfig
}