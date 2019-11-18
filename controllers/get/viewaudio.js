const Audio= require('../../model/audio')
const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    const token= jwt.verify(req.session.userId,process.env.token_pass)
    const userId= token._id
    Audio.find({userId},(err,audios)=>{
        res.render('viewAudio',{audios})
    })
}