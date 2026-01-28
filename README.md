Backend GraphQL y gRPC – CRUD de Productos (Node.js + SQLite)

Proyecto académico de la Unidad 4 – Arquitectura de Aplicaciones Web.
Se implementan dos backends independientes en Node.js para comparar GraphQL y gRPC,
ambos con CRUD completo sobre una base de datos SQLite local utilizando ORM (Sequelize).
No se emplean consultas SQL manuales.

--------------------------------------------------
TECNOLOGÍAS Y LIBRERÍAS
--------------------------------------------------

Comunes:
- Node.js (>= 18)
- JavaScript
- SQLite
- Sequelize (ORM)

Backend GraphQL:
- Express
- Apollo Server
- GraphQL

Backend gRPC:
- @grpc/grpc-js
- @grpc/proto-loader
- Protocol Buffers (.proto)

--------------------------------------------------
ESTRUCTURA DEL REPOSITORIO
--------------------------------------------------

Backend-GraphQL/
- src/
  - config/database.js
  - models/Producto.js
  - schema/typeDefs.js
  - resolvers/productoResolver.js
  - server.js
- database.sqlite
- package.json

Backend-gRPC/
- src/
  - config/database.js
  - models/Producto.js
  - proto/producto.proto
  - services/productoService.js
  - server.js
- database.sqlite
- package.json

Cada backend es independiente, con su propia base de datos y su propio servidor.

--------------------------------------------------
MODELO DE DATOS
--------------------------------------------------

Entidad: Producto
- id (autogenerado)
- nombre
- descripcion
- precio (pesos colombianos - COP)

La tabla se crea automáticamente al iniciar cada servidor mediante Sequelize.

--------------------------------------------------
INICIALIZACIÓN DEL PROYECTO
--------------------------------------------------

Requisitos:
- Node.js 18 o superior
- npm

Instalación de dependencias:

Backend GraphQL:
cd Backend-GraphQL
npm install

Backend gRPC:
cd Backend-gRPC
npm install

--------------------------------------------------
EJECUCIÓN DESDE TERMINAL
--------------------------------------------------

Backend GraphQL:
cd Backend-GraphQL
node src/server.js

Servicio disponible en:
http://localhost:4000/graphql

Backend gRPC:
cd Backend-gRPC
node src/server.js

Servicio disponible en:
localhost:50051

--------------------------------------------------
OPERACIONES CRUD
--------------------------------------------------

GraphQL:
- Crear producto
- Listar productos
- Obtener producto por ID
- Actualizar producto
- Eliminar producto

Permite ejecutar múltiples mutations en una sola solicitud.

gRPC:
- Crear producto
- Obtener productos
- Actualizar producto
- Eliminar producto

Cada operación corresponde a una llamada punto a punto definida en el archivo .proto.

--------------------------------------------------
CARGA DE DATOS DE EJEMPLO (COP)
--------------------------------------------------

GraphQL – creación múltiple en una sola solicitud:

mutation {
  p1: crearProducto(nombre: "Laptop Empresarial", descripcion: "Equipo portátil corporativo", precio: 4200000) { id }
  p2: crearProducto(nombre: "Monitor 24 pulgadas", descripcion: "Monitor Full HD", precio: 980000) { id }
  p3: crearProducto(nombre: "Teclado Mecánico", descripcion: "Teclado retroiluminado", precio: 320000) { id }
  p4: crearProducto(nombre: "Mouse Inalámbrico", descripcion: "Mouse ergonómico", precio: 120000) { id }
  p5: crearProducto(nombre: "Base Refrigerante", descripcion: "Base para portátil", precio: 150000) { id }
}

gRPC – ejemplo de creación de producto:

{
  "nombre": "Laptop Empresarial",
  "descripcion": "Equipo portátil corporativo",
  "precio": 4200000
}

--------------------------------------------------
PRUEBAS
--------------------------------------------------

GraphQL:
- GraphQL Playground

gRPC:
- Postman (gRPC) o BloomRPC importando el archivo producto.proto

--------------------------------------------------
BASE DE DATOS
--------------------------------------------------

- SQLite local (database.sqlite) por backend
- Creación automática de tablas al iniciar el servidor
- Persistencia gestionada completamente por Sequelize


Proyecto desarrollado con fines académicos.
