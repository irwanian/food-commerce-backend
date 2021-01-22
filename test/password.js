const chai = require('chai')
const chaiHttp = require('chai-http')
const { hashPassword, comparePassword } = require('../lib/password')

chai.should()
chai.use(chaiHttp)

describe('Test Password Lib', () => {
    // Test Hashing Password
    it('should hash the passsword', async () => {
        const hashedPassword = await hashPassword('hasih')
        hashedPassword.should.have.lengthOf(60)
    })
    // Test Compare password
    it('Should return true', async () => {
        const hashedPassword = await hashPassword('test')
        const comparedPassword = await comparePassword('test', hashedPassword)
        comparedPassword.should.equal(true)
    })
})

