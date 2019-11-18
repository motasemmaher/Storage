const mongoose = require('mongoose');
var bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name."]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please provide your email."]
    },
    password:{
        type:String,
        required:[true,"Please porvide your password."]
    },
},{timestamps:true})


userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {return next()};
    bcrypt.hash(user.password,10).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})

const user = mongoose.model('user',userSchema)

module.exports=user;