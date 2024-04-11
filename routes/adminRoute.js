const express=require('express');
const admin=express.Router();
const adminController=require('../controller/adminController')

admin.get('/',adminController.admin)
admin.get('/login',adminController.login)
admin.post('/login',adminController.loginPost)
admin.get('/home',adminController.home)
admin.get('/logout',adminController.logout)
module.exports=admin