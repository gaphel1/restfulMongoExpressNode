const router = require('express').Router()
const CarController = require('../controllers/car.controllers')
const checkAuth = require('../middleware/check-auth')


// router.post('/',UserController.createUser)
router.post('/',CarController.addCar)
router.get('/', CarController.findCar)
router.delete('/',CarController.deleteCar)

module.exports = router;

