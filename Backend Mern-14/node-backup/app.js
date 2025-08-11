const express = require('express')

 const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
      console.log(req.body)
   res.send("hello duniya")
})
app.get('/profile',(req,res)=>{

   res.send("this profile")
})

 app.listen(3000,()=>{
    console.log("server running on port 3000")
 })

