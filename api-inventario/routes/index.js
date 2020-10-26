
const bodegaRoute = require('./bodega.routes')
const productoRoute = require('./producto.routes')
const proveedoresRoute = require('./proveedores.routes')

const routing = (app) => {
    app.use('/bodegas', bodegaRoute)
    app.use('/productos', productoRoute)
    app.use('/proveedores', proveedoresRoute)
}

module.exports = routing