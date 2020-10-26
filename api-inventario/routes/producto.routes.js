const express = require('express')
const router = express.Router()

const controller = require("../controllers/producto.controller")

router.get('/todos', controller.getProductos);
router.get('/producto/:id?', controller.getProductoPorId);
router.post('/:_id?', controller.saveOrUpdateProducto);
router.delete('/:_id', controller.deleteProducto);


module.exports = router