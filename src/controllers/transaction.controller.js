const transactionService = require('../services/transaction.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

async function create(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    const transaction = await transactionService.create(req.body, req.user.id)
    res
      .status(201)
      .send(transaction)
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    const transaction = await transactionService.update(req.params.id, req.body, req.user.id)
    res
      .status(200)
      .send(
        { 
          message: 'Transaction updated successfully',
          transaction
        }
      )
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    await transactionService.remove(req.params.id, req.user.id)
    res
      .status(410)
      .send({ message: 'Transaction deleted successfully' })
  } catch (err) {
    next(err)
  }
}

async function findAllByUser(req, res, next) {
  try {
    const transactions = await transactionService.findAllByUser(req.user.id)
    res
      .status(200)
      .send({
        transactions
      })
  } catch (err) {
    next(err)
  }
}

async function findByType(req, res, next) {
  try {
    const transactions = await transactionService.findByType(req.params.type, req.user.id)
    res
      .status(200)
      .send({
        transactions
      })
  } catch (err) {
    next(err)
  }
}

async function findByCategory(req, res, next) {
  try {
    const transactions = await transactionService.findByCategory(req.params.categoryId, req.user.id)
    res
      .status(200)
      .send({
        transactions
      })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create,
  update,
  remove,
  findAllByUser,
  findByType,
  findByCategory,
}
