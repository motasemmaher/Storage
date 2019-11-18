const User= require('../../model/user')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

module.exports= (req,res)=>{
    const {email,password}= req.body
    User.findOne({email},(err,user)=>{
    
        if(err){
            const error=Object.keys(err.errors).map(key=>err.errors[key].message)
            console.log(error)
            req.flash("ErrorMessage",error)
            req.redirect('/')
        }
        if(user){
            bcrypt.compare(password,user.password,(err,same)=>{
                if(same){
                    const payload= {_id:user._id}
                    //create token 
                    jwt.sign(payload,process.env.token_pass, {expiresIn:'1h'},(err,token)=>{
                        req.session.userId=token
                        res.redirect('/homepage')
                    })
                }else{ 
                    return res.redirect('/login')
                }
            })
        }
        else
             res.redirect('/login')   
    })
}