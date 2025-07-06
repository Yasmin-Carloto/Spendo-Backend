const db = require('../database/models/index')
const { User } = db

async function create(user) {
    return await User.create(user)
}

async function update(data, id) {
    return await User.update(data, { where: { id } })
}

async function findById(id) {
    return await User.findByPk(id)
}

async function findByWhere(where) {
    return await User.findOne({ where })
}

module.exports = {
    create,
    update,
    findById,
    findByWhere,
}
