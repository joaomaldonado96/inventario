const express = require('express')
const router = express.Router()

const controller = require("../controllers/proveedores.controller")

router.get('/todos', controller.getProveedores);


module.exports = router