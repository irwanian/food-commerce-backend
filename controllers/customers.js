const { Op } = require('sequelize')
const CustomerModel = require('../models/').postgres.customers
const { comparePassword, hashPassword } = require('../lib/password')
const { signJWT, verifyJWT } = require('../lib/jwt')

const registerCustomer = module.exports.registerCustomer = async (customer) => {
    try {
        
        const isCustomerCreated = await getDetailByPhoneOrEmail(customer)
        console.log({ isCustomerCreated })
        if (isCustomerCreated) {
            throw('Email Atau Nomor HP Sudah Terdaftar')
        }
        const customerCreated = await createCustomer({
            full_name: customer.full_name,
            phone: customer.phone,
            email: customer.email,
            password: await hashPassword(customer.password)
        })

        return { token: await signJWT({ id: customerCreated.id, role: 'CUSTOMER' })}
    } catch (error) {
        throw error
    }
}

const createCustomer = (customer) => {
    return CustomerModel.create(customer)
}

const getDetailById = ({ id }) => {
    return CustomerModel.findOne({ where: { id }}, { raw: true })
    .then(result => {
        return result
    })
    .catch(err => {
        throw err
    })
}

const getDetailByPhoneOrEmail = (customer) => {
    return CustomerModel.findOne({ where: {
        [Op.or]: [
        { email: customer.email || 'no email' },
        { phone: customer.phone || 'no phone' }
    ]}}, { raw: true })
    .then(result => {
        return result
    })
    .catch(err => {
        throw err
    })
}