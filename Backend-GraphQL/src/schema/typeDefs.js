const { gql } = require('apollo-server-express');

module.exports = gql`
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String
    precio: Float!
  }

  type Query {
    productos: [Producto]
    producto(id: ID!): Producto
  }

  type Mutation {
    crearProducto(nombre: String!, descripcion: String, precio: Float!): Producto
    actualizarProducto(id: ID!, nombre: String, descripcion: String, precio: Float): Producto
    eliminarProducto(id: ID!): Boolean
  }
`;
