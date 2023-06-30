create database tiendaAngular;
use tiendaAngular;
create table producto(
    codigo int primary key auto_increment,
    nombre varchar(100),
    precio double,
    cantidad int,
    descripcion varchar(300),
    imagen varchar(300),
    fecha timestamp default current_timestamp

    create table cliente(
     idcliente int primary key auto_increment,
     nombre varchar(55),
     apellido varchar(45),
     direcchion varchar(45),
     telefono varchar(45),
     email varchar(45));

);


