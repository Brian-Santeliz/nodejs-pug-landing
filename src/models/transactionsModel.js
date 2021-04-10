const Sequelize = require('sequelize');
const db = require('../settings/databaseConnection');
const Producto = require('./productsModel');
const Cliente = require('./clientsModels');

const Transaccion = db.define('transaccion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pago: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'El nombre es obligatorio',
      },
    },
  },
});

Transaccion.Producto = Transaccion.belongsTo(Producto);
Transaccion.Cliente = Transaccion.belongsTo(Cliente);

module.exports = Transaccion;
