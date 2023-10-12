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
    anticipo DECIMAL(10, 2) DEFAULT 0,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Roles para el sistema
INSERT INTO Rol (tipo_rol, detalles_rol) VALUES
('administrador', 'Rol con permisos de administrador.'),
('invitado', 'Rol para los invitados.');

-- Usuario con rol "administrador"
INSERT INTO Usuario (email, pass, nombre, apellido, estado, id_rol) VALUES
('jorgegarzon@gmail.com', 'admin', 'Jorge', 'Garzón', 'Activo', 1);

-- Usuarios con rol "invitado"
INSERT INTO Usuario (mail, pass, nombre, apellido, estado, id_rol) VALUES
('invitado@gmail.com', '11111', 'invitado1', 'invitado1', 'Activo', 2);

--
INSERT INTO Vehiculo (codigo, placa, tipo_registro, descripcion, precio, anticipo, id_usuario)
VALUES
    (100, 'XYZ123', 'preventivo', 'Sedán rojo', 15000.00, 0.00, 1),
    (101, 'ABC456', 'mantenimiento', 'SUV negro', 200.00, 0.00, 1),
    (102, 'DEF789', 'correctivo', 'Hatchback azul', 12000.00, 0.00, 1),
    (103, 'GHI012', 'flete', 'Camioneta gris', 250.00, 50.00, 1),
    (104, 'JKL567', 'preventivo', 'Sedán plateado', 18000.00, 0.00, 2),
    (105, 'MNO890', 'correctivo', 'Hatchback blanco', 11000.00, 0.00, 2),
    (106, 'PQR123', 'flete', 'Camioneta roja', 280.00, 60.00, 2),
    (107, 'STU456', 'preventivo', 'Sedán negro', 16000.00, 0.00, 3);