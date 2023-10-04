require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const articlesRoutes = require('./routes/articlesRoutes')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

const port  = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('DB connected...')
    app.listen(port)
  })

app.use('/api/articles', articlesRoutes)

app.use('/api/users', usersRoutes)

app.use((req, res) => {
  res.status(404).send("Error 404")
})