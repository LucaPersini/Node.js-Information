const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', userSchema)
module.exports = User