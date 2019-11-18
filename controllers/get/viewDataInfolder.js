const Audio= require('../../model/audio')
const Video= require('../../model/video')
const Photo= require('../../model/photo')
const jwt= require('jsonwebtoken');

module.exports= (req,res)=>{
    folderId=req.session.folderId= req.params.id
    const token= jwt.verify(req.session.userId,process.env.token_pass)
    const userId= token._id

    var Audios= Videos= Photos= null
    Audio.find({folderId:folderId,userId:userId},(err,audios)=>{
        if(audios){
            Audios= audios
        }
        Video.find({folderId:folderId,userId:userId},(req,videos)=>{
            if(videos){
                Videos=videos
            }
            Photo.find({folderId:folderId,userId:userId},(req,photos)=>{
                if(photos){
                    Photos=photos
                }
                const data={Videos:Videos,Audios:Audios,Photos:Photos}
                res.render('viewDataInfolder',{data})
            })
        })
    })
}