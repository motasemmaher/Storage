const Folder= require('../../model/folder')
const Audio= require('../../model/audio')
const Video= require('../../model/video')
const Photo= require('../../model/photo')
var fs = require('fs');
const Path= require('path')

module.exports= (req,res)=>{
    let folderId= req.params.id
    Folder.find({_id:folderId},(err,folder)=>{
        Audio.find({folderId:folderId},(err,audios)=>{
           if(audios){
            (audios).forEach(element => {
                var path= element.path
                element.deleteOne();
                fs.unlinkSync(Path.resolve(`public/${path}`))
            });
            
           }
            Video.find({folderId:folderId},(req,videos)=>{
                if(videos){
                    (videos).forEach(element => {
                        var path= element.path
                        element.deleteOne();
                        fs.unlinkSync(Path.resolve(`public/${path}`))
                    });
                }
                Photo.find({folderId:folderId},(req,photos)=>{
                    if(photos){
                        (photos).forEach(element => {
                            var path= element.path
                            element.deleteOne();
                            fs.unlinkSync(Path.resolve(`public/${path}`))
                        });
                    }
                    Folder.deleteOne({_id:folderId},(err)=>{
                        return res.redirect('/view/folder')

                    });
                })
            })
           
    })
})


}