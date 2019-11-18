const Photo= require('../../model/photo')
var fs = require('fs');
const Path= require('path')


module.exports= (req,res)=>{
    Photo.findById({_id:req.params.id},(err,photo)=>{
        let path= photo.path 
        photo.remove()
        fs.unlinkSync(Path.resolve(`public/${path}`), (err)=>{
            if(err){
                localStorage.setItem("Error","we conn't to remove this photo!")
                return res.redirect('/view/photo')
            }
            return res.redirect('/view/photo')
             
        })  
    })  
    
}