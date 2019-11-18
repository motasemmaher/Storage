const path= require('path')
const Photo= require('../../model/photo')

module.exports=(req,res)=>{
    const {image}=req.files
    console.log("motasem")
    image.mv(path.resolve(__dirname,'public'),(err)=>{
        Photo.updateOne({_id:req.params.id},
            {
                name: req.body.name,
                path: `/image/${image.name}`,
                type: image.mimetype,
                date: Date.now()
            },(err)=>{
                res.redirect('/view/photo')
            })
    })
}