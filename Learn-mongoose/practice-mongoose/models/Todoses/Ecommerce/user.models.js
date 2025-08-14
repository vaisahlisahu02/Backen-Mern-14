import mongoose  from "mongoose";



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        required:true,
        type:String
    }
},{timestamps:true})




export const UserSchema = mongoose.model("User",userSchema)