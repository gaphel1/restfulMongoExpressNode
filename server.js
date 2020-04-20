const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var api = require('./api/api')
require('dotenv').config()

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(api)

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true });

app.listen(3000);