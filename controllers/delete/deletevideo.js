const Video= require('../../model/video')
var fs = require('fs');
const Path= require('path')


module.exports= (req,res)=>{
    Video.findById({_id:req.params.id},(err,video)=>{
        let path=video.path
        video.remove();
        fs.unlinkSync(Path.resolve(`public/${path}`), (err)=>{
            if(err){
                localStorage.setItem("Error","we conn't to remove this video!")
                return res.redirect('/view/video')
            }
            return res.redirect('/view/video')
        }) 
    })
}