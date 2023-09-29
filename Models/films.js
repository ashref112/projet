// require mongoose 
const mongoose = require('mongoose')

//create schema
const schema = mongoose.Schema

const filmSchema = new schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    minAge:{
        type:Number,
        required:true
    },
    posterUrl:{
        type:String,
        required:true
    },
})

//export 
module.exports = connect = mongoose.model('film',filmSchema)