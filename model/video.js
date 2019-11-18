const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
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

const video = mongoose.model('video',videoSchema)

module.exports=video;