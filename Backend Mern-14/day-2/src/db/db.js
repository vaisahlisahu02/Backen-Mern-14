const mongoose = require("mongoose")

function connect(){
    mongoose.connect("mongodb://localhost:27017/mern-14")
    .then(()=>{
        console.log("DB connect succesfully")
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = connect