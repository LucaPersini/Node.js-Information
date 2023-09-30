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
  },
  articleID: {
    type: String,
    require: true
  }
})

const Interaction = mongoose.model("interaction", interactionSchema)
module.exports = Interaction