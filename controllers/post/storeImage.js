const path= require('path')
var Photo = require('../../model/photo');
module.exports = (req,res)=>{
    var {image} = req.files
    console.log(image)
    const foldId= req.session.folderId
    if (image.size / 10000 <= 10){
        image.mv(path.resolve(`./public/image`,image.name),(err)=>{
            Photo.create({
                userId:req.user._id,
                ...req.body,
                folderId:foldId,
                path:`/image/${image.name}`
            },(err,reslut)=>{
                if(err){
                    req.flash("ErrorMessaage")
                }
                res.redirect(`/view/folder/${folderId}`)

            })
        })
    }
    else{
        console.log("err")
        res.redirect(`/view/folder/`);
    }
}