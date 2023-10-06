const User = require('../models/user')

const userIndex = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const perPage = 10
  try {
    const users = await User.find(req.query)
      .skip((page-1) * perPage)
      .limit(perPage)
    if(!users) {
      return res.status(404).send("Error 404, users not found")
    }
    const totalCount = await User.countDocuments()
    const respose = {
      users: users,
      itemsInList: users.length,
      totalItems: totalCount
    }
    res.status(200).send(respose)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const userDetails = async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findById(id)
    if(!user) {
      return res.status(404).send("Error 404, user not found")
    }
    res.status(200).send(user)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  const userBody = req.body
  try {
    if(!userBody.nickname || !userBody.dateOfBirth || !userBody.city) {
      return res.status(400).send("Error 400, bad request")
    }
    await User.create(userBody)
    res.status(200).send(userBody)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findByIdAndDelete(id)
    if(!user) {
      return res.status(404).send("Error 404, user not found")
    }
    res.status(200).send("DELETE request called")
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  const id = req.params.id
  const userBody = req.body
  try {
    if(!userBody.nickname || !userBody.dateOfBirth || !userBody.city) {
      return res.status(400).send("Error 400, bad request")
    }
    const user = await User.findByIdAndUpdate(id, userBody)
    if(!user) {
      return res.status(404).send("Error 404, user not found")
    }
    const updatedUser = await User.findById(id)
    res.status(200).send(updatedUser)
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