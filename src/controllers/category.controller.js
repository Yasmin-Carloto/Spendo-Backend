const categoryService = require('../services/category.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

async function create(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    const category = await categoryService.create(req.body, req.user.id)
    res
      .status(201)
      .send(category)
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    const category = await categoryService.update(req.params.id, req.body, req.user.id)
    res
      .status(200)
      .send(
        { 
          message: 'Category updated successfully',
          category
        }
      )
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    await categoryService.remove(req.params.id, req.user.id)
    res
      .status(410)
      .send({ message: 'Category deleted successfully' })
  } catch (err) {
    next(err)
  }
}

async function findAllByUser (req, res, next) {
  try {
    const categories = await categoryService.findAllByUser(req.user.id)
    res
      .status(200)
      .send(categories)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  create,
  update,
  remove,
  findAllByUser,
}
