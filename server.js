const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')
var api = require('./api/api')
var errors = require('./api/middleware/error')
require('dotenv').config()

const app = express();



mongoose.connect(process.env.DB_NAME, {useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true });
//make use of nodejs promise insted of mongoose
mongoose.Promise = global.Promise

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(api)
app.use(errors)


app.listen(process.env.PORT);