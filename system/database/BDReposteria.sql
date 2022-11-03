Create database Reposteria;
Use Reposteria;

Create Table Usuarios(
    IDUsuario int,
    Nombre Varchar(50),
    Apellido Varchar(50),
    Correo Varchar(50),
    Contraseña Varchar(100),
    Direccion Varchar(50),
    telefono Integer,
    IDRol int
);

Create Table Roles(
    IDRol int,
    Rol Varchar(50),
    Descripcion Varchar(100)
);

Create Table Producto(
    IDProducto int,
    Nombre Varchar(50),
    Descripcion Varchar(100)
);

Create Table Catalogo(
    IDCatalogo int,
    Toping Varchar(100),
    Precio float,
    IDProducto int
); --Donde se pondria la informacion para el pastel personalizado?

Create Table LineaPedido( --Sera el Carrito
    IDLineaPedido int,
    IDCatalogo int,
    Descripcion Varchar(100)
    Imagen blob
);

Create Table Pedido(
    IdPedido Int,
    FechaRecibido DateTime,
    FechaEntrega DateTime,
    Estatus Varchar(50),
    Total Integer
    IDCatalogo Int,
    IDUsuario Int, 
    IDLineaPedido Int
);
