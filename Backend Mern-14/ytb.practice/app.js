const express = require("express")
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


app.set("view engine", "ejs");
app.set("views","./views")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/logout",(req,res)=>{
  res.cookie("token","")
    res.redirect("/login")
})


app.post("/register",async(req,res)=>{
 const{username,password,email,age,name} = req.body
 const user =  await userModel.findOne({email});
 if(user) return res.status(500).send("user already registered")
   bcrypt.genSalt(10,(err,salt)=>{
bcrypt.hash(password,  salt,async(err,hash)=>{
  const user = await userModel.create({
    username,
    email,
    age,
    name,
    password:hash
   });
 const token =   jwt.sign({email:email,userid: user._id},"shhhh")
 res.cookie("token", token)
 res.send("registered")

})
})
})



app.post("/login",async(req,res)=>{
 const{password,email} = req.body
 const user =  await userModel.findOne({email});
 if(!user) return res.status(500).send("something went wrong")
   
  bcrypt.compare(password, user.password, function(err,result){
if(result)res.status(200).send("you can login")
    else res.redirect("/login")
})
})



app.listen(3000,()=>{
    console.log("server running")
})