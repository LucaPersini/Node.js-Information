const Article = require('../models/article')

const articlesIndex = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const perPage = 10
  try{
    const articles = await Article.find(req.query)
      .select({interactions: 0})
      .skip((page-1) * perPage)
      .limit(perPage)
    if(!articles) {
      return res.status(404).send("Error 404, articles not found")
    }
    const totalCount = await Article.countDocuments()
    const respose = {
      articles: articles,
      itemsInList: articles.length,
      totalItems: totalCount
    }
    res.status(200).send(respose)
  }
  catch (error)  {
    res.status(500).send(error.message)
  }
}

const articleDetails = async (req, res) => {
  const id = req.params.id
  try {
    const article = await Article.findById(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    res.status(200).send(article)
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

const createArticle = async (req, res) => {
  const articleBody = req.body
  try {
    if(!articleBody.title || !articleBody.date || !articleBody.interactions) {
      return res.status(400).send("Error 400, bad request")
    }
    await Article.create(article)
    res.status(200).send(article)
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteArticle = async (req, res) => {
  const id = req.params.id
  try {
    const article = await Article.findByIdAndDelete(id)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
    }
    res.status(200).send("DELETE request called")
  }
  catch(error) {
    res.status(500).send(error.message)
  }
}

const updateArticle = async (req, res) => {
  const id = req.params.id
  const articleBody = req.body
  try {
    if(!articleBody.title || !articleBody.date || !articleBody.interactions) {
      return res.status(400).send("Error 400, bad request")
    }
    const article = await Article.findByIdAndUpdate(id, article)
    if(!article) {
      return res.status(404).send("Error 404, article not found")
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