const Audio= require('../../model/audio')
var fs = require('fs');
const Path= require('path')

module.exports= (req,res)=>{
    Audio.findById({_id:req.params.id},(err,audio)=>{
        var path= audio.path
        audio.remove();
        fs.unlinkSync(Path.resolve(`public/${path}`), (err)=>{
            if(err){
                localStorage.setItem("Error","we conn't to remove this audio!")
                return res.redirect('/view/audio')
            }
            return res.redirect('/view/audio')
        })      
    })  
     
             
}