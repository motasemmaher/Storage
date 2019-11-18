const mongoose = require('mongoose');

const AudioSchema = new mongoose.Schema({
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

const Audio = mongoose.model('Audio',AudioSchema)

module.exports=Audio;