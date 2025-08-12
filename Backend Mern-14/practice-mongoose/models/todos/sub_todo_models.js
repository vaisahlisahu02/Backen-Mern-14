import mongoose from ' mongoose'


const subtodoSchema = new mongoose.schema({
    content:{
        type:String,
        require:true,
    },
    complete:{
        type:Boolean
    }
},{timestams:true})



export const SubTodo = mongoose.model("SubTodo",subtodoSchema)