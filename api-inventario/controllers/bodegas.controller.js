
const model = require("../models/bodegas.model")
const errorUtils = require("../shared/error.shared")
const requestUtils = require("../shared/request.shared")
const validator = require('../validators/bodegas.validator')

const getBodegaPorProducto = async(req, res, next) => {
    try {
        const productoId = req.params['_id']
        const bodegas = await model.getBodegaPorProducto(productoId)
        res.send(bodegas)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}
const getBodegas = async(req, res, next) => {
    try {
        const bodegas = await model.getBodegas()
        res.send(bodegas)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}


const getBodegaPorId = async(req, res, next) => {
    try {
        const bodegaId = req.params['_id']
        const bodega = await model.getBodegaPorId(bodegaId)
        res.send(bodega)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}


const saveOrUpdateBodega = async(req, res, next) => {
    try {
        const id = req.params['_id']
        if (!id) validator.validateBodegas(req.body)
        validator.transformObjectId(req.body)
        const bodega = await model.saveOrUpdateBodega(id, req.body)
        res.send(bodega)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}



module.exports = {
    getBodegaPorProducto,
    getBodegaPorId,
    saveOrUpdateBodega,
    getBodegas

}