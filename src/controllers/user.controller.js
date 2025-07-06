const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

async function create(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

        const response = await userService.create(req.body)
        res
            .status(201)
            .send(response)
    } catch (error) {
        return next(error)
    }
}

async function login(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

        const response = await userService.login(req.body)
        res
            .status(200)
            .send(response)
    } catch (error) {
        return next(error)
    }
}

async function getUserInfo(req, res, next) {
    try {
        const response = await userService.getUserInfoById(req.user.id)
        res
            .status(200)
            .send(response)
    } catch (error) {
        next(error)
    }
}

async function update(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) throw createError(422, { errors: errors.array() })

    const user = await userService.update(req.body, req.user.id)
    res
        .status(200)
        .send({
            message: "User updated successfully",
            user
        })
  } catch (error) {
    next(error)
  }
}


module.exports = {
    create,
    getUserInfo,
    login,
    update
}
