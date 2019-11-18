const path= require('path')
const Audio= require('../../model/audio')

module.exports=(req,res)=>{
    const {audio}=req.files
    console.log("motasem")
    audio.mv(path.resolve(__dirname,'public'),(err)=>{
        Audio.updateOne({_id:req.params.id},
            {
                name: req.body.name,
                path: `/audio/${audio.name}`,
                type: audio.mimetype,
                date: Date.now()
            },(err)=>{
                res.redirect('/view/audio')
            })
    })
}