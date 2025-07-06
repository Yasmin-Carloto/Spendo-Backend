const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

function create() {
    return [
        body("name", validatorMessage("name"))
            .exists()
            .bail()
            .isString()
            .isLength({ min: 3 }),
        
        body("email", validatorMessage("email"))
            .exists()
            .bail()
            .isEmail(),
        
        body("password", validatorMessage("password"))
            .exists()
            .bail()
            .isString()
            .isLength({ min: 6 })
            .isStrongPassword({
                minLength: 6,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })
            .withMessage('Password must contain at least 6 characters, including 1 uppercase, 1 number and 1 symbol'),
    ]
}

function findById() {
    return [
        param("id", validatorMessage("id"))
            .exists()
            .bail()
            .isInt(),
    ]
}

function login() {
    return [
        body("email", validatorMessage("email"))
            .exists()
            .bail()
            .isEmail(),
        
        body("password", validatorMessage("password"))
            .exists()
            .bail()
            .isString(),
    ]
}


function update() {
  return [
    body('name')
      .optional()
      .isString()
      .withMessage('Name must be a string')
      .isLength({ min: 3 })
      .withMessage('Name must be at least 3 characters'),
    
    body('email')
      .optional()
      .isEmail()
      .withMessage('Invalid email'),
    
    body('password')
      .optional()
      .isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
      .withMessage('Password must contain at least 6 characters, including 1 uppercase, 1 number and 1 symbol'),
  ]
}

module.exports = {
    create,
    findById,
    login,
    update,
}
