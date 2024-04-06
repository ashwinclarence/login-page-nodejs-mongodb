const express=require('express')
const user=express.Router()


user.post('/login',(req,res)=>{
    res.render('login',{title:'User login'})
})

user.get('/register',(req,res)=>{
    res.render('userRegister',{title:'User Register'})
})

user.post('/dashboard',(req,res)=>{
    res.render('userHome',{title:'User Home'})
})


module.exports=user