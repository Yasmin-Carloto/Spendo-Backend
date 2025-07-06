const db = require('../database/models')
const { Transaction } = db

async function create (data) {
  return await Transaction.create(data)
}

async function update(data, id, userId) {
  return await Transaction.update(data, { where: { id, userId } })
}

async function remove(id, userId) {
  return await Transaction.destroy({ where: { id, userId } })
}

async function findByUserId(userId) {
  return await Transaction.findAll({ where: { userId } })
}

async function findByType(type, userId) {
  return await Transaction.findAll({ where: { type, userId } })
}

async function findByCategory(categoryId, userId) {
  return await Transaction.findAll({ where: { categoryId, userId } })
}

async function findByIdAndUserId(id, userId) {
  return await Transaction.findOne({ where: { id, userId } })
}

module.exports = {
  create,
  update,
  remove,
  findByUserId,
  findByType,
  findByCategory,
  findByIdAndUserId,
};
