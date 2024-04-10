const collection=require('../model/connection')


const login=(req,res)=>{
    if(req.session.admin){
        res.render('adminHome')
    }else{
        res.redirect('/admin')
    }
}


module.exports={login}