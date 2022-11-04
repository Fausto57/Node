Create Database Reposteria;
Use Reposteria;

Create Table Usuarios(
    IDUsuario Int,
    Nombre Varchar(50),
    Apellido Varchar(50),
    Correo Varchar(50),
    Contraseña Varchar(100),
    Direccion Varchar(50),
    telefono Integer,
    IDRol Int
);

Create Table Roles(
    IDRol Int,
    Rol Varchar(50),
    Descripcion Varchar(100)
);

Create Table Producto(
    IDProducto Int,
    Nombre Varchar(50),
    Descripcion Varchar(100)
);

Create Table Catalogo(
    IDCatalogo Int,
    Toping Varchar(100),
    Precio Float,
    IDProducto Int
); --Donde se pondria la informacion para el pastel personalizado?

Create Table LineaPedido( --Sera el Carrito
    IDLineaPedido int,
    Descripcion Varchar(100),
    Estatus Varchar(50),
    Imagen blob,
    IDCatalogo Int,
    IdPedido Int,
);

Create Table Pedido(
    IdPedido Int,
    FechaRecibido DateTime,
    FechaEntrega DateTime,
    TipoEntrega Bit,
    Estatus Varchar(50),
    Total Integer,
    IDUsuario Int
);

Create Table Pago(
    IDPago Int,
    Nombre Varchar(50),
    NumeroTarjeta Integer,
    CVV Int,
    Total Float,
    IdPedido Int
);
