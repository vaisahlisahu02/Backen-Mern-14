const express = require("express");

const app = express()


app.get('/',(req,res)=>{
    res.send("server is ready")
})

// get a list of 5 jikes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:"this is first jokes"
        },{
            id:2,
            title:'another jokes',
            content:"second joke"

        },{
            id:3,
            title:'other joke',
            content:"third joke"
        }
    ];
    res.send(jokes)
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})