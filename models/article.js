const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const Article = mongoose.model('article', articleSchema)
module.exports = Article