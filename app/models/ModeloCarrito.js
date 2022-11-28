let db = require('../../system/database/database')

var conn = db.conexion

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.CarritoUsuario = function(req, res){
    var {id} = req.params;

    var sql =  `SELECT C.Toping, C.Precio, P.Total FROM LineaPedidos L
    Inner Join Catalogo C On L.IDCatalogo = C.IDCatalogo
    Inner Join Pedidos P On L.IDPedido = P.IDPedido
    WHERE L.Estatus = 'Carrito' AND IDUsuario = ${id}`;

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

module.exports.EliminaCarrito = function(req, res){
    var {id} = req.params;

    var sql =  `DELETE FROM lineapedidos WHERE IDLineaPedido = ${id}`;

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