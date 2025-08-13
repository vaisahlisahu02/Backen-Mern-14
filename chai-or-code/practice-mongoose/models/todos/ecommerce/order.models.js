import mongoose  from "mongoose";


const orderItemSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    coustmer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
    }
},{timestamps:true})





export const Order = mongoose.model("Order",orderItemSchema)