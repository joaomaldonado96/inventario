const validator = require('./generic.validators')

const validateBodegas = (bodega) => {
    const properties = ['productos', 'direccion', 'nombre', 'cuidad']
    validator.validateProperties(bodega, properties)
}

const transformObjectId = (bodega) => {
}

module.exports = {
    validateBodegas,
    transformObjectId,
    ...validator
}