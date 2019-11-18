const express = require('express');
const app = express();
const expresssession=require('express-session')
const bodyParser = require('body-parser')
const uploadfile= require('express-fileupload')
const mongoose = require('mongoose');
const connectMongo= require('connect-mongo') 
const verify= require('./routes/verifyToken')
const flash= require('connect-flash')

require('dotenv').config()

//app use
app.use(uploadfile())
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoStore= connectMongo(expresssession)
app.use(express.static('public'))
app.use(require('express-edge'));
app.use(expresssession({
    secret:'secret',
    store: new mongoStore({
        mongooseConnection:mongoose.connection
    }),
    resave:true,
    saveUninitialized:true
}))
//end app use

//app set
app.set('views', `${__dirname}/views`);
//end app set

//posts
const storeImage= require('./controllers/post/storeImage')
const storeaudio= require('./controllers/post/storeaudio')
const storevideo= require('./controllers/post/storevideo')
const storeuser= require('./controllers/post/storeuser')
const login= require('./controllers/post/login')
const addfolder= require('./controllers/post/addfolder')
const Search= require('./controllers/post/search')

app.post('/search',verify,Search)
app.post('/storeData',storeuser)
app.post('/login',login)
app.post('/addfolder',verify,addfolder)
app.post('/storeinfoImg',verify,storeImage)
app.post('/storeinfoAudio',verify,storeaudio)
app.post('/storeinfoVideo',verify,storevideo)

//end post

//gets 
const viewaudio= require('./controllers/get/viewaudio')
const viewphoto= require('./controllers/get/viewphoto')
const homepage= require('./controllers/get/homepage')
const Login= require('./controllers/get/login')
const viewvideo= require('./controllers/get/viewvideo')
const registration= require('./controllers/get/registration')
const folder= require('./controllers/get/folders')
const viewDataInFolder= require('./controllers/get/viewDataInfolder')
const datasearch= require('./controllers/get/datasearch')

app.get('/logout',verify,require('./controllers/post/logout'))
app.get('/view/Search',verify,datasearch)
app.get('/login',Login)
app.get('/registration',registration)
app.get('/view/folder',verify,folder)
app.get('/view/folder/:id',verify,viewDataInFolder)
app.get('/homepage',verify,homepage)
app.get('/view/audio',verify,viewaudio)
app.get('/view/photo',verify,viewphoto)
app.get('/view/video',verify,viewvideo)
//end get

//delete
const deletephoto= require('./controllers/delete/deletephoto')
const deleteaudio= require('./controllers/delete/deleteaudio')
const deletevideo= require('./controllers/delete/deletevideo')
const deletefolder= require('./controllers/delete/deletfolder')

app.delete('/delete/folder/:id',deletefolder)
app.delete('/delete/photo/:id',deletephoto)
app.delete('/delete/audio/:id',deleteaudio)
app.delete('/delete/video/:id',deletevideo)
//end delete

//put 
const updatephoto= require('./controllers/put/updatephoto')
const updateaudio= require('./controllers/put/updateaudio')
const updatevideo= require('./controllers/put/updatevideo')
const updatefolder= require('./controllers/put/updatefolder')

app.put('/update/folder/:id',updatefolder)
app.put('/update/photo/:id',updatephoto)
app.put('/update/audio/:id',updateaudio)
app.put('/update/video/:id',updatevideo)
//end put


app.listen(3333,()=>{
    console.log("server listen on port 3000")
})

