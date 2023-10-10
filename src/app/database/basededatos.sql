CREATE DATABASE examen;

-- \c examen

CREATE TABLE Rol (
    id_rol SERIAL PRIMARY KEY,
    tipo_rol VARCHAR(100),
    detalles_rol TEXT
);

CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    estado VARCHAR(100),
    id_rol INT,
    FOREIGN KEY (id_rol) REFERENCES Rol(id_rol)
);

CREATE TABLE Vehiculo (
    id_vehiculo SERIAL PRIMARY KEY,
    codigo INT NOT NULL,
    placa VARCHAR(100),
    tipo_registro VARCHAR(100),
    descripcion VARCHAR(100),
    precio DECIMAL(10, 2),
    anticipo DECIMAL(10, 2),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);