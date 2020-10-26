const { ObjectId } = require('mongodb')
const mongoConnector = require('../db/mongo.db')
//const genericValidator = require('../validators/generic.validators')
const errorUtils = require("./../shared/error.shared")

const getProductos = async() => {
    const connection = await mongoConnector
    let aggregate = []
    const productos = await connection.collection('productos').aggregate(aggregate, { allowDiskUse: true }).toArray()
    return productos
}

const getProductoPorId = async(productoId) => {
    const connection = await mongoConnector
    let aggregate = [{
        $match: {
            _id: new ObjectId(productoId)
        }
    }]
    const producto = await connection.collection('productos').aggregate(aggregate, { allowDiskUse: true }).next()
    return producto
}

const saveOrUpdateProducto = async(productoId, productoBody) => {
    const connection = await mongoConnector
    delete productoBody._id
    const producto = await connection.collection('productos').findOneAndUpdate({
        _id: new ObjectId(productoId)
    }, {
        $set: productoBody
    }, {
        upsert: true,
        returnOriginal: false
    })
    return producto.value
}

const deleteProducto = async (id) => {
    const connection = await mongoConnector
    await connection.collection('productos').findOneAndDelete({
      _id: new ObjectId(id)
    });
  }

module.exports = {
    getProductos,
    getProductoPorId,
    saveOrUpdateProducto,
    deleteProducto
}