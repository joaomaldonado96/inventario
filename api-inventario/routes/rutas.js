'use strict'

var express = require('express');
var productoController = require('../controller/producto');
var bodegaController = require('../controller/bodega');
var compraController = require('../controller/compra');
var api = express.Router();

//Producto

api.get('/productos', productoController.getProductos);
api.get('/producto/:id?', productoController.getProducto);
api.post('/producto', productoController.saveProducto);
api.put('/producto/:id', productoController.updateProducto);
api.delete('/producto/:id', productoController.deleteProducto);

//Bodega

api.get('/bodega', bodegaController.getInventario);
api.get('/bodega_producto/:id?', bodegaController.getInventarioProducto);
api.get('/unidadesBodega/:id?', bodegaController.getunidadesProducto);
api.post('/bodega_producto', bodegaController.saveInventario);
api.put('/bodega_producto/:id', bodegaController.updateInvetario);

//Compra

api.get('/compra/:id?', compraController.getCompra);
api.get('/compraCompleta/:id?', compraController.getCompraCompleta);
api.get('/compras', compraController.getCompras);
api.get('/idcompra', compraController.getIdCompra);
api.get('/compraFecha/:fecha', compraController.getCompraFecha);
api.post('/compra', compraController.saveCompra);
api.post('/compraPro', compraController.saveCompraPro);
api.delete('/compra/:id', compraController.deleteCompra);



module.exports = api;