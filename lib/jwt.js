const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const verifyJWT = async (token) => {
    try {
        return await jwt.verify(token, JWT_SECRET )
    } catch (error) {
        throw error
    }
}

const signJWT = async (payload) => {
    try {
        return await jwt.sign(payload, JWT_SECRET, { expiresIn: '30 days' } )
    } catch (error) {
        throw error
    }
}

module.exports = {
    signJWT,
    verifyJWT
}