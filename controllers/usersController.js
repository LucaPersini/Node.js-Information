const User = require('../models/user')

const userIndex = async (req, res) => {
  try {
    const users = await User.find(req.query)
    if(!users) {
      res.status(404).send("Error 404, users not found")
    }
    res.status(200).send(users)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const userDetails = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, user not found")
    }
    const user = await User.findById(id)
    res.status(200).send(user)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const user = req.body
    if(!user) {
      res.status(400).send("Error 400, bad request")
    }
    await User.create(user)
    res.status(200).send(user)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, user not found")
    }
    res.status(200).send("DELETE request called")
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, user not found")
    }
    const user = req.params.id
    if(!user) {
      res.status(400).send("Error 400, bad request")
    }
    await User.findByIdAndUpdate(id, user)
    res.status(200).send(user)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  userIndex,
  userDetails,
  createUser,
  deleteUser,
  updateUser
}