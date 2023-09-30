const Interaction = require('../models/interaction')

const interaction_index = (req, res) => {
  Interaction.find({"articleID": req.params.id}, req.query)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const interaction_details = (req, res) => {
  const id = req.params.interactionID
  Interaction.findById(id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const create_interaction = (req, res) => {
  const interaction = req.body
  Interaction.create(interaction)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const delete_interaction = (req, res) => {
  const id = req.params.interactionID
  Interaction.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("DELETE Request Called")
    })
    .catch(err => console.log(err))
}

const update_interaction = (req, res) => {
  const id = req.params.interactionID
  const interaction = req.body
  Interaction.findByIdAndUpdate(id, interaction)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

module.exports = {
  interaction_index,
  interaction_details,
  create_interaction,
  delete_interaction,
  update_interaction
}