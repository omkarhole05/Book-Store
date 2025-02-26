import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:false
    },
    message:{
        type:String,
        required:true
    }
})

const contact=mongoose.model("contact",userSchema);

export default contact;