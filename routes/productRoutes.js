const express = require('express')
const router = express.Router()
const { createProduct, getAllProducts } = require('../controllers/productcontroller')
const { uploadProductImage } = require('../controllers/uploadController')

router.route('/').post(createProduct).get(getAllProducts)
router.route('/uploads').post(uploadProductImage)

module.exports = router