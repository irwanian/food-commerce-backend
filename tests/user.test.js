const chai = require('chai')
const chaiHttp = require('chai-http')
const { hashPassword, comparePassword } = require('../lib/password')

chai.use(chaiHttp)

describe('Test Hash Password', async () => {
    const hashedPassword = await hashedPassword('hasih')
    
})

