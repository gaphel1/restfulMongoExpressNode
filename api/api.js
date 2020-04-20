const router = require('express').Router()
const UserRouter = require('./routes/user.routes')
const CarRouter = require('./routes/car.routes')
const OrderRouter = require('./routes/order.routes')

router.use('/user',UserRouter)
router.use('/car',CarRouter)
router.use('/order',OrderRouter)

module.exports = router