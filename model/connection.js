const mongoose =require("mongoose")

// mongodb connection using the connection string
mongoose.connect('mongodb://localhost:27017/DbUserManagement').then(()=>{
    console.log("Mongodb Connected")
}).catch((err)=>{
    console.log(`Mongodb connection error ${err}`)
})

// defining the schema for the collection
const schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collectionModel = mongoose.model("UserManagement",schema);

module.exports =collectionModel;