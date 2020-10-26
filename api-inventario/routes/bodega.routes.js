const express = require('express')
const router = express.Router()

const controller = require("../controllers/bodegas.controller")

router.get('/porId/:_id?', controller.getBodegaPorId );
router.get('/producto/:_id?', controller.getBodegaPorProducto);
router.get('/todas/', controller.getBodegas);
router.post('/:id?', controller.saveOrUpdateBodega);


module.exports = router