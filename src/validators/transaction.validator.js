const { body, param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')
const { TRANSACTION_TYPES } = require('../utils/transaction.types')

function create() {
    return [
        body("title", validatorMessage("title"))
            .isString()
            .notEmpty(),

        body("value", validatorMessage("value"))
            .isFloat({ gt: 0 }),

        body("type", validatorMessage("type"))
            .isIn([TRANSACTION_TYPES.EXPENSE, TRANSACTION_TYPES.INCOME])
            .withMessage("Type should be expense or income."),

        body("categoryId", validatorMessage("categoryId"))
            .isInt({ gt: 0 }),
    ]
}

function update() {
    return [
        param("id", validatorMessage("id"))
            .isInt({ gt: 0 }),

        body("title")
            .optional()
            .isString(),

        body("value")
            .optional()
            .isFloat({ gt: 0 }),

        body("type")
            .optional()
            .isIn([TRANSACTION_TYPES.EXPENSE, TRANSACTION_TYPES.INCOME])
            .withMessage("Type should be expense or income."),
        
        body("categoryId")
            .optional()
            .isInt({ gt: 0 }),
    ]
}

function remove() {
    return [
        param("id", validatorMessage("id"))
            .isInt({ gt: 0 }),
    ]
}

function findByType() {
    return [
        param("type", validatorMessage("type"))
            .isIn([TRANSACTION_TYPES.EXPENSE.valueOf(), TRANSACTION_TYPES.INCOME.valueOf()])
    ]
}

function findByCategory() {
    return [
        param("categoryId", validatorMessage("categoryId"))
            .isInt({ gt: 0 })
    ]
}

module.exports = {
  create,
  update,
  remove,
  findByType,
  findByCategory
}
