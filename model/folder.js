const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    userId:String,
    name:{
        type:String,
        unique:true,
        require:[true,"Please provide your name."]
    },
    date:{
        type:Date,
        default:Date.now
    },
})

const folder = mongoose.model('folder',folderSchema)

module.exports=folder;