const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/', usersController.user_index)

router.get('/:id', usersController.user_details)

router.post('/', usersController.create_user)

router.delete('/:id', usersController.delete_user)

router.patch('/:id', usersController.update_user)

module.exports = router