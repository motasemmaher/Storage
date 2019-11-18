const jwt= require('jsonwebtoken')
module.exports= (req,res,next)=>{
    const token=req.session.userId
    if(!token)return res.status(401).redirect('/login')
 //   console.log(window.localStorage.getItem("token"))

    try{
        const verified = jwt.verify(token,process.env.token_pass,{expiresIn:'1h'})
        req.user=verified
        next();
    }catch(err){
        res.status(400).redirect('/login')
    }
}