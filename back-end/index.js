const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = 3000
const HomeRouter = require('./routes/home')

app.use('/', HomeRouter)
console.log(`Connecting to: ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (err) => {
  console.log(err)
})
db.once('open', function() {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})