const express = require('express')
const router = express.Router()
const verifyJWT = require('../middlewares/authorizator')
const transactionController = require('../controllers/transaction.controller')
const transactionValidator = require('../validators/transaction.validator')

router.get('/', verifyJWT, transactionController.findAllByUser)
router.get('/type/:type', verifyJWT, transactionValidator.findByType(), transactionController.findByType)
router.get('/category/:categoryId', verifyJWT, transactionValidator.findByCategory(), transactionController.findByCategory)
router.post('/', verifyJWT, transactionValidator.create(), transactionController.create)
router.put('/:id', verifyJWT, transactionValidator.update(), transactionController.update)
router.delete('/:id', verifyJWT, transactionValidator.remove(), transactionController.remove)

module.exports = router
