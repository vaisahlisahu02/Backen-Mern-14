import mongoose  from "mongoose";



const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        requied:true
    }
},{timestamps:true})




export const CategorySchema = mongoose.model("Category",categorySchema)