const express = require('express')
const userModel = require('./model/user.model')

 const app = express()

app.use(express.json())

 app.post('/create', async(req,res)=>{
const{username,email,password} = req.body
 const user = await userModel.create({
    username:username,
    email:email,
    password:password
})
res.send(user)
 })

app.get('/get-user',async(req,res)=>{
    const user = await userModel.find({
        password: "123590"
    })
    res.send(user)
})



 module.exports = app