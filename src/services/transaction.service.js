const transactionRepository = require('../repositories/transaction.repository');
const categoryRepository = require('../repositories/category.repository')
const createError = require('http-errors');

async function create(data, userId) {
  const category = await categoryRepository.findByIdAndUserId(data.categoryId, userId);
  if (!category) {
    throw createError(404, 'Category not found for this user');
  }

  return await transactionRepository.create({ ...data, userId })
}

async function update(id, data, userId) {
  const existing = await transactionRepository.findByIdAndUserId(id, userId)
  if (!existing) throw createError(404, 'Transaction not found')

  const result = await transactionRepository.update(data, id, userId)
  if (result[0] === 0) {
    throw createError(400, 'Update failed')
  } else {
    const transaction = await transactionRepository.findByIdAndUserId(id, userId)
    return transaction
  }
}

async function remove(id, userId) {
  const existing = await transactionRepository.findByIdAndUserId(id, userId)
  if (!existing) throw createError(404, 'Transaction not found')

  const result = await transactionRepository.remove(id, userId)
  if (result === 0) {
    throw createError(400, 'Delete failed')
  } else {
    const transaction = await transactionRepository.findByIdAndUserId(id, userId)
    return transaction
  }
}

async function findAllByUser(userId) {
  return await transactionRepository.findByUserId(userId)
}

async function findByType(type, userId) {
  return await transactionRepository.findByType(type, userId)
}

async function findByCategory(categoryId, userId) {
  return await transactionRepository.findByCategory(categoryId, userId)
}

module.exports = {
  create,
  update,
  remove,
  findAllByUser,
  findByType,
  findByCategory,
};
