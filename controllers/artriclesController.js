const Article = require('../models/article')

const articles_index = (req, res) => {
  Article.find(req.query)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const article_details = (req, res) => {
  const id = req.params.id
  Article.findById(id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const create_article = (req, res) => {
  const article = req.body
  Article.create(article)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

const delete_article = (req, res) => {
  const id = req.params.id
  Article.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send('DELETE Request Called')
    })
    .catch(err => console.log(err))
}

const update_article = (req, res) => {
  const id = req.params.id
  const article = req.body
  Article.findByIdAndUpdate(id, article)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
}

module.exports = {
  articles_index,
  article_details,
  create_article,
  delete_article,
  update_article
}