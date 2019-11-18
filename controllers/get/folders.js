const Folder= require('../../model/folder')


const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    const token= jwt.verify(req.session.userId,process.env.token_pass)
    const userId= token._id
    Folder.find({userId},(err,packs)=>{
        res.render('folder',{packs})
    })
}