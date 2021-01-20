const express = require('express')
const app = express()
const port = process.env.PORT || 2021

app.get('/', (req, res) => res.send('<h1>Banzai!!<h1/>'))

app.listen(port, () => {
    console.log(`App Started on Port:`, port)
})