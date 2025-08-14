import mongoose  from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        required:true,
        type:Number
    },
},{timestamps:true})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItmes:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    },
},{timestamps:true})





export const OrderSchema = mongoose.model("Order",orderSchema)