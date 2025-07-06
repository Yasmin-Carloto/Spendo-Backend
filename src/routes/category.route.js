const express = require('express')
const router = express.Router()
const verifyJWT = require('../middlewares/authorizator')
const categoryController = require('../controllers/category.controller')
const categoryValidator = require('../validators/category.validator')

router.get('/', verifyJWT, categoryController.findAllByUser)
router.post('/', verifyJWT, categoryValidator.create(), categoryController.create)
router.put('/:id', verifyJWT, categoryValidator.update(), categoryController.update)
router.delete('/:id', verifyJWT, categoryValidator.remove(), categoryController.remove)

module.exports = router
