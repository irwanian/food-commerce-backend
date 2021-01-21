const express = require('express')
const app = express()
const { sequelize } = require('../models')
const port = process.env.PORT || 2021

app.get('/', (req, res) => res.send('<h1>Banzai!!<h1/>'))

sequelize.sync()
.then(()=> {
    app.listen(port, () => {
        console.log(`App Started on Port:`, port)
    })
})
.catch(err => console.log({ err }))