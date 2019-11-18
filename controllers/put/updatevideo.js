const path= require('path')
const Video= require('../../model/video')

module.exports=(req,res)=>{
    const {video}=req.files
    console.log("motasem")
    video.mv(path.resolve(__dirname,'public'),(err)=>{
        Video.updateOne({_id:req.params.id},
            {
                name: req.body.name,
                path: `/video/${video.name}`,
                type: video.mimetype,
                date: Date.now()
            },(err)=>{
                res.redirect('/view/video')
            })
    })
}