const MongoClient = require('mongodb').MongoClient
const env = require('./../shared/env.shared')
let db = null

_connect = async() => {
    try {
        const url = env.mongoConfiguration.url
        console.log(url)
        db = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, poolSize: 10 })
        return db.db()
    } catch (e) {
        return e
    }
}

getConnection = async() => {
    try {
        if (db == null) {
            db = await _connect()
            console.log('Connected')
        }
        return db
    } catch (e) {
        return e
    }
}

module.exports = getConnection()