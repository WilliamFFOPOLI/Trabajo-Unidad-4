const Producto = require('../models/Producto');

module.exports = {
  Query: {
    productos: async () => await Producto.findAll(),
    producto: async (_, { id }) => {
      const p = await Producto.findByPk(id);
      if (!p) throw new Error('Producto no encontrado');
      return p;
    }
  },
  Mutation: {
    crearProducto: async (_, data) => await Producto.create(data),

    actualizarProducto: async (_, { id, ...data }) => {
      const p = await Producto.findByPk(id);
      if (!p) throw new Error('Producto no existe');
      return await p.update(data);
    },

    eliminarProducto: async (_, { id }) => {
      const p = await Producto.findByPk(id);
      if (!p) throw new Error('Producto no existe');
      await p.destroy();
      return true;
    }
  }
};
