const Article = require('../models/article')

const interactionsIndex = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.statu(404).send("Error 404, article not found")
    }
    const interactions = await Article.findById(id).select({interactions: 1, _id: 0})
    res.status(200).send(interactions)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const interactionDetails = async (req, res) => {
  try{
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    const interactionId = req.params.interactionId
    if(!interactionId) {
      res.statu(404).send("Error 404, interaction not found")
    }
    const article = await Article.findById(id)
    const interaction = await article.interactions.find((i) => i._id.toString() == interactionId)
    res.status(200).send(interaction)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const createInteraction = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    const interaction = await req.body
    if(!interaction) {
      res.status(400).send("Error 400, bad request")
    }
    const article = await Article.findById(id)
    await article.interactions.push(interaction)
    article.save()
    res.status(200).send(interaction)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const deleteInteraction = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    const interactionId = req.params.interactionId
    if(!interactionId) {
      res.status(404).send("Error 404, interaction not found")
    }
    const article = await Article.findById(id)
    const interaction = await article.interactions.id(interactionId)
    article.interactions.pull(interaction)
    res.status(200).send(article)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const updateInteraction = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    const interactionId = req.params.interactionId
    if(!interactionId) {
      res.status(404).send("Error 404, interaction not found")
    }
    const article = await Article.findById(id)
    const interaction = await article.interactions.id(interactionId)
    if(!req.body) {
      res.status(400).send("Error 400, bad requeste")
    }
    if(req.body.type) {
      interaction.set("type", req.body.type)
    }
    if(req.body.date) {
      interaction.set("date", req.body.date)
    }
    article.save()
    res.status(200).send(interaction)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  interactionsIndex,
  interactionDetails,
  createInteraction,
  deleteInteraction,
  updateInteraction
}