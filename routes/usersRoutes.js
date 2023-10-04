const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/', usersController.userIndex)

router.get('/:id', usersController.userDetails)

router.post('/', usersController.createUser)

router.delete('/:id', usersController.deleteUser)

router.patch('/:id', usersController.updateUser)

module.exports = router