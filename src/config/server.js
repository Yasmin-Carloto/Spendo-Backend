require('dotenv').config()

// Requerindo bibliotecas
const express = require('express')
const bodyParser = require('body-parser')

// Requerindo middlewares de erro
const handle404Error = require('../middlewares/handle404Error')
const handleError = require('../middlewares/handleError')

const { userRoute, categoryRoute, transactionRoute } = require("../routes/index")

const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Rotas
server.use('/api/users', userRoute)
server.use("/api/categories", categoryRoute)
server.use("/api/transactions", transactionRoute)

// Middleware de erro
server.use(handle404Error);
server.use(handleError);

server.listen(process.env.API_PORT, () => {
  console.log(`BACKEND rodando na porta ${process.env.API_PORT}...`)
})

module.exports = server
