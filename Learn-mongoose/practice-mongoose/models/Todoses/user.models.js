import mongoose from 'mongoose'


 new userSchema = mongoose.Schema({
    username:{
    type:Strung,
    require:true,
    unique:true,
    lowecase:true
}, 
email:{
type:String,
require:true,
lowercase:true

},
password:{
    type:String,
    require:[true,'password must be require']
}
 })


 const User =  mongoose.model('User', userSchema)

 module.exports = User;