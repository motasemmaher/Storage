module.exports=(req,res)=>{
    req.session.Search=req.body.data
    res.redirect('/view/search')   
}