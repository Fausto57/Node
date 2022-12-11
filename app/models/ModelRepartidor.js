let db = require('../../system/database/database')

var conn = db.conexion

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.stTerminados = function(req, res){
    var sql =  `Select L.IDPedido, Concat(U.Nombre, ' ', U.Apellido) as Nombre, U.Direccion, C.Toping    
    From Usuarios U
    Inner Join Pedidos P On U.IDUsuario = P.IDUsuario
    Inner Join LineaPedidos L On P.IDPedido = L.IDPedido
    Where L.Estatus = 'Autorizado'`;

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
module.exports.stEntrega = function(req, res){
    var sql =  `Select L.IDPedido, Concat(U.Nombre, ' ', U.Apellido) as Nombre, U.Direccion, C.Toping    
    From Usuarios U
    Inner Join Pedidos P On U.IDUsuario = P.IDUsuario
    Inner Join LineaPedidos L On P.IDPedido = L.IDPedido
    Where L.Estatus = 'En Proceso'`;

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
