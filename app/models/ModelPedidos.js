let db = require('../../system/database/database')

var conn = db.conexion

module.exports.ObtenerP = function(req, res){
    var {id} = req.params;
    var sql =  `SELECT * FROM LineaPedidos where IdPedido = ${id} And Estatus = 'Carrito'`

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

module.exports.ActualizarP = function(id, descripción, cantidad, ){
    var {id} = req.params;
    var sql =  `Update Desc`

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

module.exports.EliminarP = function(req, res){
    var {id} = req.params;
    var sql =  `SELECT * FROM LineaPedidos where IdPedido = ${id}`

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

module.exports.MostrarPedidos = function(req, res){
    var {id} = req.params;
    var sql =  `Select Pr.Nombre, Pa.Descripcion, C.Toping, L.Cantidad, C.Precio, L.Estatus
    from Pedidos P
    Inner Join LineaPedidos L On P.idPedido = L.idPedido
    Inner Join Pasteles Pa On L.idLineaPedido = Pa.idLineaPedidos
    Inner Join Catalogo C On C.idCatalogo = L.idCatalogo
    Inner Join Productos Pr On Pr.idProducto = C.idProducto
    Where P.idUsuario = ${id}`

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