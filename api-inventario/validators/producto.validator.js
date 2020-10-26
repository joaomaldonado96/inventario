const validator = require('./generic.validators')

const validateProducto = (producto) => {
    const properties = ['referencia', 'tamano', 'precioUnitario', 'precioDeventa']
    validator.validateProperties(producto, properties)
}

const transformObjectId = (producto) => {
    //  validator.validateAndTransformId(padlock, 'customer', 'El id del customer no es valido')
}

module.exports = {
    validateProducto,
    transformObjectId,
    ...validator
}