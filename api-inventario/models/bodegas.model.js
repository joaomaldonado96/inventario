const { ObjectId } = require('mongodb')
const mongoConnector = require('../db/mongo.db')
//const genericValidator = require('../validators/generic.validators')
const errorUtils = require("./../shared/error.shared")

const getBodegaPorProducto = async(productoId) => {
    const connection = await mongoConnector
    let aggregate = [{
        $match: {
            producto: new ObjectId(productoId)
        }
    }]
    const bodegas = await connection.collection('bodegas').aggregate(aggregate, { allowDiskUse: true }).toArray()
    return bodegas
}

const getBodegas = async() => {
    const connection = await mongoConnector
    const bodegas = await connection.collection('bodegas').find({}).toArray()
    return bodegas
}
const getBodegaPorId = async(bodegaId) => {
    const connection = await mongoConnector
    let aggregate = [{
        $match: {
            _id: new ObjectId(bodegaId)
        }
    }]
    const bodega = await connection.collection('bodegas').aggregate(aggregate, { allowDiskUse: true }).next()
    return bodega
}

const saveOrUpdateBodega = async(bodegaId, bodegaBody) => {
    const connection = await mongoConnector
    delete bodegaBody._id
    const bodega = await connection.collection('bodegas').findOneAndUpdate({
        _id: new ObjectId(bodegaId)
    }, {
        $set: bodegaBody
    }, {
        upsert: true,
        returnOriginal: false
    })
    return bodega.value
}
module.exports = {
    getBodegaPorProducto,
    getBodegaPorId,
    saveOrUpdateBodega,
    getBodegas
}