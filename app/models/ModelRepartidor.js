let db = require('../../system/database/database')

var conn = db.conexion

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.Obtener = function(req, res){
    var sql =  `SELECT * FROM LineaVenta WHERE Estatus = 'Terminado'`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(result.length > 0){
                    res.json(result);
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.Obtener = function(req, res){
    var sql =  `SELECT * FROM LineaVenta WHERE Estatus = 'Entregando'`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(result.length > 0){
                    res.json(result);
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}