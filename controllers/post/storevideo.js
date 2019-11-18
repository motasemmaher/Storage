const path= require('path')
const Video= require('../../model/video')

module.exports= (req,res)=>{
    const {video} = req.files
    const foldId= req.session.folderId
    video.mv(path.resolve(`./public/video`,video.name),(err)=>{
        Video.create({
            userId:req.user._id,
            ...req.body,
            folderId:foldId,
            type:video.mimetype,
            path:`/video/${video.name}`
        },(err,result)=>{
            res.redirect(`/view/folder/${folderId}`)
        })
    })
}