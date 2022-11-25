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

Create Table Productos(
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

Create Table LineaPedidos( --Sera el Carrito
    IDLineaPedido int,
    Descripcion Varchar(100),
    Estatus Varchar(50),
    ImagenURL Varchar(100),
    IDCatalogo Int,
    IdPedido Int,
);

Create Table Pedidos(
    IdPedido Int,
    FechaRecibido DateTime,
    FechaEntrega DateTime,
    TipoEntrega Bit,
    Estatus Varchar(50),
    Total Integer,
    IDUsuario Int
);

Create Table Pagos(
    IDPago Int,
    Nombre Varchar(50),
    NumeroTarjeta Integer,
    CVV Int,
    Total Float,
    IdPedido Int
);


-- LLAVES PRIMARIAS
ALTER TABLE Usuarios ADD CONSTRAINT PK_Usuarios PRIMARY KEY (IDUsuario);
ALTER TABLE Roles ADD CONSTRAINT PK_Roles PRIMARY KEY (IDRol);
ALTER TABLE Pedidos ADD CONSTRAINT PK_Pedidos PRIMARY KEY (IdPedido);
ALTER TABLE Pagos ADD CONSTRAINT PK_Pagos PRIMARY KEY (IDPago);
ALTER TABLE LineaPedidos ADD CONSTRAINT PK_LineaPedidos PRIMARY KEY (IDLineaPedido);
ALTER TABLE Catalogo ADD CONSTRAINT PK_Catalogos PRIMARY KEY (IDCatalogo);
ALTER TABLE Productos ADD CONSTRAINT PK_Productos PRIMARY KEY (IDProducto);

-- LLAVES FORANEAS
ALTER TABLE Usuarios ADD FOREIGN KEY (IDRol) REFERENCES Rol (IDRol);
ALTER TABLE Pedidos ADD FOREIGN KEY (IDUsuario) REFERENCES Usuarios (IDUsuario);
ALTER TABLE Catalogo ADD FOREIGN KEY (IDProducto) REFERENCES Productos (IDProducto);
ALTER TABLE LineaPedidos ADD FOREIGN KEY (IdPedido) REFERENCES Pedidos (IdPedido);
ALTER TABLE LineaPedidos ADD FOREIGN KEY (IDCatalogo) REFERENCES Catalogo (IDCatalogo);

-- 