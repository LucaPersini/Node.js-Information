const express = require('express')
const articlesController = require('../controllers/artriclesController')
const interactionsController = require('../controllers/interactionsController')

const router = express.Router()

router.get('/', articlesController.articlesIndex)

router.get('/:id', articlesController.articleDetails)

router.post('/', articlesController.createArticle)

router.delete('/:id', articlesController.deleteArticle)

router.patch('/:id', articlesController.updateArticle)

router.get('/:id/interactions', interactionsController.interactionsIndex)

router.get('/:id/interactions/:interactionId', interactionsController.interactionDetails)

router.post('/:id/interactions', interactionsController.createInteraction)

router.delete('/:id/interactions/:interactionId', interactionsController.deleteInteraction)

router.patch('/:id/interactions/:interactionId', interactionsController.updateInteraction)


module.exports = router