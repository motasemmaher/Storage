module.exports=(req,res)=>{
    req.session.userId = 0
    res.redirect('/login')
}