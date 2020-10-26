
const model = require("../models/producto.model")
const errorUtils = require("../shared/error.shared")
const requestUtils = require("../shared/request.shared")
const validator = require('../validators/producto.validator')

const getProductoPorId = async(req, res, next) => {
    try {
        const productoId = req.params['_id']
        const producto = await model.getProductoPorId(productoId)
        res.send(producto)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}

const getProductos = async(req, res, next) => {
    try {
        const productos = await model.getProductos()
        res.send(productos)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}

const saveOrUpdateProducto = async(req, res, next) => {
    try {
        const id = req.params['_id']
        if (!id) validator.validateProducto(req.body)
        validator.transformObjectId(req.body)
        const producto = await model.saveOrUpdateProducto(id, req.body)
        res.send(producto)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}



const deleteProducto = async (req, res, next) => {
    try {
      await model.deleteProducto(req.params._id)
      res.status(200).send({})
    } catch (e) {
      errorUtils.sendErrorResponse(res, e)
    }
  }


module.exports = {
    getProductoPorId,
    getProductos,
    saveOrUpdateProducto,
    deleteProducto
}