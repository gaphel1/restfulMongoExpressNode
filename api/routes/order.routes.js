const router = require('express').Router()
const OrderController = require('./../controllers/order.controllers')
const checkAuth = require('../middleware/check-auth')


// router.post('/',UserController.createUser)
router.post('/',OrderController.addOrder)
router.get('/',OrderController.findOrder)
router.delete('/',OrderController.deleteOrder)

module.exports = router;

