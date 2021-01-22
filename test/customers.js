const chai = require('chai')
chai.should()

describe('get ', () => {
    it('should return true', () => {
        const ten = 5 + 5
        ten.should.be.equal(10)
    })
})