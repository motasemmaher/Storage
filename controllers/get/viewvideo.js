const Video= require('../../model/video')
const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    const token= jwt.verify(req.session.userId,process.env.token_pass)
    const userId= token._id
    Video.find({userId},(err,videoes)=>{
        res.render('viewVideos',{videoes})
    })
}