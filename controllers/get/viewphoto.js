const Photo= require('../../model/photo')
const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    const token= jwt.verify(req.session.userId,process.env.token_pass)
    const userId= token._id
    Photo.find({userId},(err,photoes)=>{
        res.render('viewPhotoes',{photoes})
    })
}