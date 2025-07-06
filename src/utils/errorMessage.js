function validatorMessage(attribute) {
    return `Property '${attribute}' is invalid!`
}

// Acho que pode sair
function notExists(attribute) {
    return `'${attribute}' doesn't exists!`
}

module.exports = {
    validatorMessage,
    // Acho que pode sair
    notExists,
}