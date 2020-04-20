const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    car:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Car'
    },
    client:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    cost : Number,
},{
    timestamps: true
});
  
module.exports = mongoose.model('Order', OrderSchema)