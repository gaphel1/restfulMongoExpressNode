const router = require('express').Router()
const UserRouter = require('./routes/user.routes')

router.use('/user',UserRouter)

module.exports = router