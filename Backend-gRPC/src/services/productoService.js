const Producto = require('../models/Producto');

module.exports = {
  CrearProducto: async (call, callback) => {
    const p = await Producto.create(call.request);
    callback(null, p.toJSON());
  },

  ObtenerProductos: async (_, callback) => {
    const productos = await Producto.findAll();
    callback(null, { productos });
  },

  ActualizarProducto: async (call, callback) => {
    const p = await Producto.findByPk(call.request.id);
    if (!p) return callback(new Error('No existe'));
    await p.update(call.request);
    callback(null, p.toJSON());
  },

  EliminarProducto: async (call, callback) => {
    const p = await Producto.findByPk(call.request.id);
    if (!p) return callback(new Error('No existe'));
    await p.destroy();
    callback(null, {});
  }
};
