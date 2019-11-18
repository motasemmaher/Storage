const jwt= require('jsonwebtoken')
const Audio= require('../../model/audio')
const Video= require('../../model/video')
const Photo= require('../../model/photo')
const folder= require('../../model/folder')

module.exports=(req,res)=>{
    var Audios= Videos= Photos= null
    const userId=jwt.verify(req.session.userId,process.env.token_pass)

    Audio.find({userId:userId},(err,audios)=>{
        if(audios){
            Audios= audios
        }
        Video.find({userId:userId},(req,videos)=>{
            if(videos){
                Videos=videos
            }
            Photo.find({userId:userId},(req,photos)=>{
                if(photos){
                    Photos=photos
                }
                folder.find({userId:userId},(req,folders)=>{
                    if(photos){
                        Folders=folders
                    }
                    const data={Videos:Videos,Audios:Audios,Photos:Photos,Folders:folders}
                    res.render('homepage',{data})
                })
            })
        })
    })
}