let db = require('../../system/database/database')

var conn = db.conexion

module.exports.CarritoU = function(req, res){
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

module.exports.EliminaC = function(req, res){
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

module.exports.AgregaC = function(idUser, Cantidad, IDCatalogo, res){
    var sql =  `call InsertarDelCatalogo (`+idUser+`, `+Cantidad+`, `+IDCatalogo+`);`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(!error){
                    res.json({
                        status: true,
                        message: "Consulta Post Exitosa"
                      })
                    console.log("se inserto")
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida"
                      })
                    console.log("no se inserto")
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}

module.exports.AgregaCPasteles = function(idUser, Tamaño, Estilo, Fecha, Descripcion, Imagen, idProducto, res){
    var sql =  `call InsertarPasteles (`+idUser+`, '`+Tamaño+`', '`+Estilo+`', '`+Fecha+`', 
    '`+Descripcion+`', '`+Imagen+`', `+idProducto+`);`;

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(!error){
                    res.json({
                        status: true,
                        message: "Consulta Post Exitosa, Pasteles Agregados"
                      })
                    console.log("se inserto")
                }else{
                    res.json({
                        status: false,
                        message: "Consulta fallida"
                      })
                    console.log("no se inserto")
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}

module.exports.ObtenerPedidos = function(req, res){
    var {id} = req.params;

    var sql =  `Select L.IDLineaPedido, Pr.Nombre, P.Descripcion, C.Toping, L.Cantidad, C.Precio, L.Estatus from Pasteles P
    Inner Join LineaPedidos L On L.IDLineaPedido = P.IDLineaPedidos
    Inner Join Catalogo C On L.IDCatalogo = C.IDCatalogo
    Inner Join Productos Pr On P.IdProducto = Pr.IDProducto
    Inner Join Pedidos Pe On Pe.IDPedido = L.IDPedido
    Where Pe.IDUsuario = ${id}`;

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

module.exports.ObtenerCarrito = function(req, res){
    var {id} = req.params;

    var sql =  `Select distinct L.idPedido, Pr.Nombre, P.Descripcion, C.Toping, L.Cantidad, C.Precio, L.Estatus from Pasteles P
    Inner Join LineaPedidos L On L.IDLineaPedido = P.IDLineaPedidos
    left Join Catalogo C On L.IDCatalogo = C.IDCatalogo
    right Join Productos Pr On P.IdProducto = C.IDProducto
    Where L.Estatus = 'En El Carrito' Or L.Estatus = 'Por Autorizar' And L.IDPedido = ${id}
    Order by (Pr.Nombre)`;

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

module.exports.PagarCarrito = function(req, res){
    var {id} = req.params;

    var sql =  `Call PagarCarrito(${id})`;

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