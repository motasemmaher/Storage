const path= require('path')
const Folder= require('../../model/folder')

module.exports=(req,res)=>{
    const {pack}=req.body
    Folder.updateOne({_id:req.params.id},
    {
        name: req.body.name,
        date: Date.now()
        },
        (err)=>{
            res.redirect('/view/folder')
        })
}