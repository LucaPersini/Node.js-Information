const User = require('../models/user')

const user_index = (req, res) => {
  User.find(req.query)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const user_details = (req, res) => {
  const id =  req.params.id
  User.findById(id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => conole.log(err))
}

const create_user = (req, res) => {
  const user  = req.body
  User.create(user)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const delete_user = (req, res) => {
  const id = req.params.id
  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send('DELETE Request Called')
    })
    .catch(err => console.log(err))
}

const update_user = (req, res) => {
  const id = req.params.id
  const user = req.body
  User.findByIdAndUpdate(id, user)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

module.exports = {
  user_index,
  user_details,
  create_user,
  delete_user,
  update_user
}