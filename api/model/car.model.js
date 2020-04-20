const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    location : {
        name:String,
        pin:Number
    },
    from_location: {
        name:String,
        pin:Number
    },
    to_location: {
        name:String,
        pin:Number
    },
    departure_time:{
        data: Date,
        time:String
    },
    driver_no:Number
})

module.exports = mongoose.model('Car',carSchema)