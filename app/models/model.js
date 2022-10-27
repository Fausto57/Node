let db = require('../../system/database/database')

var conn = db.conexion
var apiconfig = db.apiconfig

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.Obtener = function(req, res){
    var sql =  `SELECT * FROM prospectos`;

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

//http://127.0.0.1:3000/v1/obtener/3  Método GET
module.exports.ObtenerID = function(req, res){
    var {id} = req.params;

    var sql =  `SELECT * FROM prospectos where id = ${id}`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(result.length > 0){
                    res.json(result);
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida, el registro no existe"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}

//http://127.0.0.1:3000/v1/guardar  Método POST
module.exports.Insertar = function(req, res){
    var {id} = req.params;
    var {nombre} = req.params;
    var {apellido} = req.params;


    var sql =  `insert into clientes(id, nombre, apellido) values (${id}, '${nombre}', '${apellido}');`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(result.length > 0){
                    res.json(result);
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida, el registro no existe"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}