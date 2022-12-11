let db = require('../../system/database/database')

var conn = db.conexion

module.exports.LoginConsult = function(Correo, Contraseña, res){

    var sql =  `Select IDRol from usuarios Where Correo = '`+Correo+`' And Contraseña = `+Contraseña

    try{
        return conn.query(sql, (error, result) => {
            if(error) throw error;

            if(result.length > 0){
                res.json(result);
            }else{
                res.json({
                    IDRol: 0,
                    message: "Consulta fallida"
                  })
            }
        })
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}