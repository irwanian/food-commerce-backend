const router = require('express').Router()
const customers = require('./gate')
const { validate } = require('../../lib/validators')
const schemas = require('../../validators/customers')


router.post('/register', validate(schemas.registerCustomer, 'body'), customers.registerCustomer)


module.exports = router