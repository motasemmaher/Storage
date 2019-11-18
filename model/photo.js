const mongoose = require('mongoose');


const PhotoSchema = new mongoose.Schema({
    userId:String,
    folderId:String,
    name:{
        type:String,
        require:[true,"Please provide your name."]
    },
    path:String,
    type:String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Photo = mongoose.model('Photo',PhotoSchema)

module.exports=Photo;