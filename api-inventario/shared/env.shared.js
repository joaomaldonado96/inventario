const mongoConfiguration = {
    ip: process.env.mongo_ip || 'localhost',
    dbName: process.env.mongo_dbName || 'inventario',
    port: process.env.mongo_port || '27017',
    user: process.env.mongo_user,
    password: process.env.mongo_password,
    asService: process.env.asService
}
mongoConfiguration.url = 'mongodb://localhost:27017/inventario?authSource=admin&retryWrites=true&w=majority'

module.exports = {
    mongoConfiguration
}