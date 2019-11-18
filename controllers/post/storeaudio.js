const path= require('path')
const Audio= require('../../model/audio')

module.exports= (req,res)=>{
    var {audio} = req.files
    const foldId= req.session.folderId
    
    audio.mv(path.resolve(`./public/audio/${audio.name}`),(err)=>{
        Audio.create({
            userId:req.user._id,
            folderId:foldId,
            ...req.body,
            path:`/audio/${audio.name}`
        },(err,reslut)=>{
            res.redirect(`/view/folder/${folderId}`)

        })
    })
}