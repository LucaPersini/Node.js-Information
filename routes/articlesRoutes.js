const express = require('express')
const articlesController = require('../controllers/artriclesController')
const interactionsController = require('../controllers/interactionsController')

const router = express.Router()

router.get('/', articlesController.articles_index)

router.get('/:id', articlesController.article_details)

router.post('/', articlesController.create_article)

router.delete('/:id', articlesController.delete_article)

router.patch('/:id', articlesController.update_article)

router.get('/:id/interactions', interactionsController.interaction_index)

router.get('/:id/interactions/:interactionID', interactionsController.interaction_details)

router.post('/:id/interactions', interactionsController.create_interaction)

router.delete('/:id/interactions/:interactionID', interactionsController.delete_interaction)

router.patch('/:id/interactions/:interactionID', interactionsController.update_interaction)

module.exports = router