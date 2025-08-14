import mongoose  from "mongoose";



const productSchema = new mongoose.Schema({
    discription:{
        require:true,
        type:String
    },
    name:{
        type:String,
       required:true 
    },
    productImage:{
type:String
    },
    price:{
        required:true,
        type:Number
    },
    stock:{
        default:0,
        type:Number
    }
},{timestamps:true})




export const ProductSchema = mongoose.model("Product",productSchema)