const { body, param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')

function create() {
  return [
    body("name", validatorMessage("name"))
      .exists()
      .bail()
      .isString(),
    
    body("color", validatorMessage("color"))
      .exists()
      .bail()
      .isHexColor(),
  ]
}

function update() {
  return [
    param("id", validatorMessage("id"))
      .exists()
      .bail()
      .isInt(),
    
    body("name")
      .optional()
      .isString(),
    
    body("color")
      .optional()
      .isHexColor(),
  ]
}

function remove() {
  return [
    param('id', validatorMessage('id'))
      .exists()
      .bail()
      .isInt(),
  ]
}

module.exports = {
  create,
  update,
  remove,
}