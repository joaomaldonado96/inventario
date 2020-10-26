const model = require("../models/proveedores.model")
const errorUtils = require("../shared/error.shared")
const requestUtils = require("../shared/request.shared")
const validator = require('../validators/bodegas.validator')

const getProveedores = async(req, res, next) => {
    try {
        const proveedores = await model.getProveedores()
        res.send(proveedores)
    } catch (e) {
        errorUtils.sendErrorResponse(res, e)
    }
}


module.exports = {
    getProveedores

}