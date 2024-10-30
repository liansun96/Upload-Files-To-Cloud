const express = require('express')
const { createProduct, getAllProducts } = require('../controllers/productcontroller')
const router = express.Router()

router.route('/').post(createProduct).get(getAllProducts)

module.exports = router