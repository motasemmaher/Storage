const jwt= require('jsonwebtoken')
const Audio= require('../../model/audio')
const Video= require('../../model/video')
const Photo= require('../../model/photo')
const folder= require('../../model/folder')

module.exports=(req,res)=>{
    Search=req.session.Search
    const userId=jwt.verify(req.session.userId,process.env.token_pass)
    
    var Audios= Videos= Photos= null
    Audio.find({name:Search,userId:userId},(err,audios)=>{
        if(audios){
            Audios= audios
        }
        Video.find({name:Search,userId:userId},(req,videos)=>{
            if(videos){
                Videos=videos
            }
            Photo.find({name:Search,userId:userId},(req,photos)=>{
                if(photos){
                    Photos=photos
                }
                folder.find({name:Search,userId:userId},(req,folders)=>{
                    if(photos){
                        Folders=folders
                    }
                    const Search={Videos:Videos,Audios:Audios,Photos:Photos,Folders:folders}
                    res.render('searchData',{Search})
                })
            })
        })
    })
}