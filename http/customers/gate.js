const customer = require('../../controllers/customers')

const registerCustomer = async (req, res) => {
    try {
        const payload = await customer.registerCustomer(req.body)
        res.success({ payload })
    } catch (error) {
        console.log({ error })
        res.error(error)
    }
}

module.exports = {
    registerCustomer
}