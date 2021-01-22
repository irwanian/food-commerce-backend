const { compare, hash, genSalt } = require('bcrypt')
const { SALT_ROUND } = process.env

const hashPassword = async password => {
    try {
        const salt = await genSalt(Number(SALT_ROUND))
        const hashedPassword = await hash(password, salt)
        
        return hashedPassword
    } catch (error) {
        throw error
    }
}

const comparePassword = async (password, hashedPassword) => {
    try {
        const isPasswordmatch = await compare(password, hashedPassword)
        console.log({ isPasswordmatch })
        return isPasswordmatch
    } catch (error) {
        throw error
    }
}

module.exports = {
    hashPassword,
    comparePassword
}