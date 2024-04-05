const express=require('express')


const port=process.env.PORT||3000;
const app=express()




app.listen(port,(err)=>{
    if(err){
        console.log(`Error Occurred ${err}`);
    }else{
        console.log(`Server running http://localhost:${port}`)
    }
})