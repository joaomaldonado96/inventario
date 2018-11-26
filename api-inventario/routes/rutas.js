'use strict'

var express = require('express');
var productoController = require('../controller/producto');
var bodegaController = require('../controller/bodega');
var compraController = require('../controller/compra');
var api = express.Router();

//Producto
api.get('/productos',productoController.getProductos);
api.get('/producto/:id?',productoController.getProducto);
api.post('/producto',productoController.saveProducto);
api.put('/producto/:id',productoController.updateProducto);
api.delete('/producto/:id',productoController.deleteProducto);


api.get('/bodega',bodegaController.getInventario);
api.get('/bodega_producto/:id?',bodegaController.getInventarioProducto);
api.post('/bodega_producto_producto',bodegaController.saveInventario);
api.put('/inventario/producto/:id',bodegaController.updateInvetario);


api.get('/compra/:id?',compraController.getCompra);
api.post('/comprames/producto',compraController.getCompraMes);



api.post('/compra',compraController.saveCompra);





api.delete('/compra/:id',compraController.deleteCompra);

module.exports = api;