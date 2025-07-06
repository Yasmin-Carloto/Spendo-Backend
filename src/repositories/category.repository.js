const db = require('../database/models')
const { Category } = db

async function create(data) {
  return await Category.create(data)
}

async function update(data, id, userId) {
  return await Category.update(data, { where: { id, userId } })
}

async function remove(id, userId) {
  await Category.destroy({ where: { id, userId } })
}

async function findByUserId(userId) {
  return await Category.findAll({ where: { userId } })
}

async function findByIdAndUserId(id, userId) {
  return await Category.findOne({ where: { id, userId } })
}

module.exports = {
  create,
  update,
  remove,
  findByUserId,
  findByIdAndUserId,
}
