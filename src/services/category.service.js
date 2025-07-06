const categoryRepository = require('../repositories/category.repository')
const createError = require('http-errors')

async function create(data, userId) {
  return await categoryRepository.create({ ...data, userId })
}

async function update(id, data, userId) {
  const existing = await categoryRepository.findByIdAndUserId(id, userId)
  if (!existing) throw createError(404, 'Category not found')

  const result = await categoryRepository.update(data, id, userId)
  if (result[0] === 0) {
    throw createError(400, 'Update failed')
  } else {
    const updatedCategory = await categoryRepository.findByIdAndUserId(id, userId)
    return updatedCategory
  }
}

async function remove(id, userId) {
  const existing = await categoryRepository.findByIdAndUserId(id, userId)
  if (!existing) throw createError(404, 'Category not found')

  const result = await categoryRepository.remove(id, userId)
  if (result === 0) throw createError(400, 'Delete failed')
}

async function findAllByUser(userId) {
  return await categoryRepository.findByUserId(userId)
}

module.exports = {
  create,
  update,
  remove,
  findAllByUser,
};
