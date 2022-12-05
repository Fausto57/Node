let db = require('../../system/database/database')

var conn = db.conexion

module.exports.ObtenerAlfajores = function(req, res){
    var sql =  `SELECT * FROM Catalogo Where IDCatalogo = 5`;

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

module.exports.ObtenerGalletas = function(req, res){
    var sql =  `SELECT * FROM Catalogo Where ID = 3`;

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

module.exports.ObtenerRoles = function(req, res){
    var sql =  `SELECT * FROM Catalogo Where ID = 6`;

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
