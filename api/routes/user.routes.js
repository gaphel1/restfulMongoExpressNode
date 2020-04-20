const router = require('express').Router()
const UserController = require('./../controllers/user.controllers')
const checkAuth = require('../middleware/check-auth')


// router.post('/',UserController.createUser)
router.post('/signup',UserController.signUp)
router.post('/login',UserController.login)
router.get('/:name',checkAuth, UserController.findUser)
router.delete('/',UserController.deleteUser)

module.exports = router;

