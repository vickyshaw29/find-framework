const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    frameworks:[]
})

module.exports = mongoose.model('User', userSchema)