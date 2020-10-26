const { ObjectId } = require('mongodb')
const mongoConnector = require('../db/mongo.db')
//const genericValidator = require('../validators/generic.validators')
const errorUtils = require("./../shared/error.shared")

const getProveedores = async() => {
    const connection = await mongoConnector
    let aggregate = []
    const proveedores = await connection.collection('proveedores').aggregate(aggregate, { allowDiskUse: true }).toArray()
    return proveedores
}

module.exports = {
    getProveedores
}