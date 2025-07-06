const { verify } = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = function (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Token not found!' })
  }

  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token!' })
    }

    req.user = { id: decoded.id }
    next()
  })
}

module.exports = verifyJWT
