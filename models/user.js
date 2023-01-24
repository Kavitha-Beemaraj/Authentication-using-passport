const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        requried: true
    },
    email:{
        type: String,
        lowercase: true,
        requried: true
    },
    password:{
        type: String,
        requried: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports=mongoose.model('User', userSchema)