import mongoose from ' mongoose'
import { mongo } from 'mongoose'

const todoSchema = new mongoose.schema({
    content:{
        type:String,

    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]

},{timestams:true})



export const Todo = mongoose.model("Todo",todoSchema)