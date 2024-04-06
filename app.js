const express=require('express')
const session=require('express-session')
const path=require('path')
const bodyParser=require('body-parser')
const nocache=require('nocache')
const {v4:uuidv4}=require('uuid')

const app=express()

const port=process.env.PORT||3000;


app.use(bodyParser.json())
app.use(nocache());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));


app.use(session({
    secret:uuidv4(),
    resave:true,
    saveUninitialized:true
}))


app.get('/',(req,res)=>{
    res.render('login',{title:'Login Page'})
})

app.listen(port,(err)=>{
    if(err){
        console.log(`Error Occurred ${err}`);
    }else{
        console.log(`Server running http://localhost:${port}`)
    }
})