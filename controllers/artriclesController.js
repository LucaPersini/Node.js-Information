const Article = require('../models/article')

const articlesIndex = async (req, res) => {
  try{
    const articles = await Article.find(req.query)
    if(!articles) {
      res.status(404).send("Error 404, articles not found")
    }
    res.status(200).send(articles)
  }
  catch (error)  {
    res.status(500).send(error.message)
  }
}

const articleDetails = async (req, res) => {
  try {
    const id = req.params.id
    const article = await Article.findById(id)
    if(!article) {
      res.status(404).send("Error 404, article not found")
    }
    res.status(200).send(article)
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

const createArticle = async (req, res) => {
  try {
    const article = req.body
    if(!article) {
      res.status(400).send("Error 400, bad request")
    }
    await Article.create(article)
    res.status(200).send(article)
  }
  catch (error) {
    res.statu(500).send(error.message)
  }
}

const deleteArticle = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    await Article.findByIdAndDelete(id)
    res.status(200).send("DELETE request called")
  }
  catch(error) {
    res.statu(500).send(error.message)
  }
}

const updateArticle = async (req, res) => {
  try {
    const id = req.params.id
    if(!id) {
      res.status(404).send("Error 404, article not found")
    }
    const article = req.body
    if(!article) {
      res.status(400).send("Error 400, bad request")
    }
    res.status(200).send(article)
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  articlesIndex,
  articleDetails,
  createArticle,
  deleteArticle,
  updateArticle
}