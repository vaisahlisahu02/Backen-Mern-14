 import mongoose from 'mongoose'


 const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedwith:{
        type:String,
        requied:true
    },
    address:{
        type:String,
        requied:true
    },
    age:{
        type:Number,
        requied:true
    },bloodgroup:{
        type:String,
        requied:true
    },gender:{
        type:String,
        requied:true,
        enum:("M","F","others")
    },addmittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
 },{timestamps:true})


 export const Patient = mongoose.model("MedicalRecord",patientSchema )
 