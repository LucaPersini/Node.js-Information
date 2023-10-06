const mongoose = require('mongoose')
const interactionSchema = require('./interaction')
const Schema =  mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  interactions: [interactionSchema]
})


articleSchema.index({title: 'text'})
const Article = mongoose.model('article', articleSchema)
module.exports = Article