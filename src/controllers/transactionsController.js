const HandlerError = require('../helpers/errorHandler');
const Transaccion = require('../models/transactionsModel');
const { errorHandler } = new HandlerError();

class TransactionController {
  async getRouter(req, res) {
    try {
      const transaction = await Transaccion.findAll({
        include: [
          {association: Transaccion.Producto},
          {association: Transaccion.Cliente}
        ]
      });
      transaction.length
        ? res.status(200).json(transaction)
        : res.status(200).json('No hay mensajes de contactos');
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async postRouter(req, res) {
    const { pago, productoId, clienteId } = req.body;
    try {
      const respuesta = await Transaccion.create({
        pago,
        productoId,
        clienteId,
      });
      respuesta
        ? res.status(201).json('Transacción creada correctamente')
        : res.status(400).json('No se pudo crear la transacción');
    } catch (error) {
      errorHandler(error, req, res);
    }
  }
}
module.exports = new TransactionController();
