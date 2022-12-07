let db = require('../../system/database/database')

var conn = db.conexion

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.stTerminados = function(req, res){
    var sql =  `Select Concat(U.nombre, ' ', U.apellido) As Nombre, U.Direccion, C.Toping, L.idLineaPedido
    From Usuarios U 
    inner join Pedidos P on P.idUsuario = U.idUsuario
    Inner Join LineaPedidos L on P.idPedido = L.idPedido
    inner join Catalogo C on C.idCatalogo = L.idCatalogo
    Where L.Estatus = 'Terminado'`;

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
    var sql =  `Select Concat(U.nombre, ' ', U.apellido) As Nombre, U.Direccion, C.Toping, L.idLineaPedido
    From Usuarios U 
    inner join Pedidos P on P.idUsuario = U.idUsuario
    Inner Join LineaPedidos L on P.idPedido = L.idPedido
    inner join Catalogo C on C.idCatalogo = L.idCatalogo
    Where L.Estatus = 'Entrega'`;

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
