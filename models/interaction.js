const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interactionSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

module.exports = interactionSchema