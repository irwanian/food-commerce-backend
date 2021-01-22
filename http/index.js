const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const { sequelize } = require('../models').postgres
const port = process.env.PORT || 2021

app.use(bearerToken())
app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next)=> {
    res.success = ({ message, payload }) => {
        res.status(200).send({
            code: 200,
            message: message || 'success',
            payload: payload || {}
        })
    }

    res.error = (error) => {
        const errorCode = error.code || 400
        res.status(errorCode).send({
            code: errorCode,
            message: error.message || error ||'request failed',
            payload: error.payload ||  {}
        })
    }
    next()
})

app.use('/customers', require(`${__dirname}/customers`))

sequelize.sync()
.then(()=> {
   app.listen(port, () => {
        console.log(`App Started on Port:`, port)
    })
})
.catch(err => console.log({ err }))

module.exports = app