const Folder= require('../../model/folder')
const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    Folder.create({
        userId:req.user._id,
        ...req.body,
    },(err,reslut)=>{
        res.redirect('/view/folder')

    })
}