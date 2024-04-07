const express=require('express')
const admin=express.Router()


const adminCredentials={
    username:"admin@123",
    password:"admin"
}

admin.get('/',(req,res)=>{
    res.render('adminLogin',{title:'Admin Login'})
})

admin.post('/dashboard',(req,res)=>{
    if(req.body.adminMail===adminCredentials.username &&req.body.adminPassword===adminCredentials.password){
        res.render('adminHome',{title:'Admin Home'})
    }else{
        res.render('adminLogin',{title:'Admin Login',ErrorMessage:'Invalid username or Password'})
    }
})

module.exports=admin