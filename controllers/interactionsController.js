const Article = require('../models/article')

const interactionsIndex = async (req, res) => {
  const id = req.params.id
  const page = parseInt(req.query.page)
  const perPage = 10
  try {
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    const interactions = await Article.findById(id)
      .select({interactions: 1, _id: 0})
      .skip((page-1) * perPage)
      .limit(perPage)
    
    const totalCount = article.interactions.length
    const response = {
      interactions: interactions,
      itemsInList: interactions.interactions.length,
      totalItems: totalCount
    }
    res.status(200).send(response)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const interactionDetails = async (req, res) => {
  const id = req.params.id
  const interactionId = req.params.interactionId
  try{ 
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    const interaction = await article.interactions.find((i) => i._id.toString() == interactionId)
    if(!interaction) {
      return res.status(404).send("Error 404, interaction not found")
    }
    res.status(200).send(interaction)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const createInteraction = async (req, res) => {
  const id = req.params.id
  const interactionBody = req.body
  try { 
    if(!interactionBody.type || !interactionBody.date) {
      return res.status(400).send("Error 400, bad request")
    }
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    article.interactions.push(interaction)
    article.save()
    res.status(200).send(interaction)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const deleteInteraction = async (req, res) => {
  const id = req.params.id
  const interactionId = req.params.interactionId
  try {  
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    const interaction = await article.interactions.id(interactionId)
    if(!interaction) {
      return res.status(404).send("Error 404, interaction not found")
    }
    article.interactions.pull(interaction)
    res.status(200).send(article)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const updateInteraction = async (req, res) => {
  const id = req.params.id
  const interactionId = req.params.interactionId
  try {   
    if(!req.body.type || !req.body.date) {
      return res.status(400).send("Error 400, bad request")
    }  
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    const interaction = await article.interactions.id(interactionId)
    if(!interaction) {
      return res.status(404).send("Error 404, interaction not found")
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