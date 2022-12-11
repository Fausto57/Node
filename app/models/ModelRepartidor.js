let db = require('../../system/database/database')

var conn = db.conexion

//http://127.0.0.1:3000/v1/obtener  Método GET
module.exports.stTerminados = function(req, res){
    var sql =  `Select L.IDLineaPedido, Concat(U.Nombre, ' ', U.Apellido) as Nombre, U.Direccion, C.Toping  
    From Usuarios U
    Inner Join Pedidos P On U.IDUsuario = P.IDUsuario
    Inner Join LineaPedidos L On P.IDPedido = L.IDPedido
    Inner Join Catalogo C On L.IDCatalogo = C.IDCatalogo
    Where L.Estatus = 'TERMINADO'`;

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
    var sql =  `Select L.IDLineaPedido, Concat(U.Nombre, ' ', U.Apellido) as Nombre, U.Direccion, C.Toping  
    From Usuarios U
    Inner Join Pedidos P On U.IDUsuario = P.IDUsuario
    Inner Join LineaPedidos L On P.IDPedido = L.IDPedido
    Inner Join Catalogo C On L.IDCatalogo = C.IDCatalogo
    Where L.Estatus = 'EN ENTREGA'`;

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

module.exports.UpdateEstatusTer = function(IDLineaPedido, res){
    var sql =  `Update LineaPedidos set Estatus = "EN ENTREGA" Where IDLineaPedido = `+IDLineaPedido

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(!error){
                    res.json({
                        status: true,
                        message: "Post Fue Exitoso"
                      })
                }else{
                    res.json({
                        status: false,
                        message: "Actualización de estado no fue exitosa"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}

module.exports.UpdateEstatusEnt = function(IDLineaPedido, res){
    var sql =  `Update LineaPedidos set Estatus = "ENTREGADO" Where IDLineaPedido = `+IDLineaPedido

        try{
            return conn.query(sql, (error, result) => {
                if(error) throw error;

                if(!error){
                    res.json({
                        status: true,
                        message: "Post Fue Exitoso"
                      })
                }else{
                    res.json({
                        status: false,
                        message: "Actualización de estado no fue exitosa"
                      })
                }
            })
        }catch(err){
            console.log(err)
            process.exit(1)
        }
}
