const express = require('express')
const fs = require('fs')
const app = express()
// express ko jb app call krte ho to vo server create krke deta he lekin use start nhi krta or use start krne ke liye hum use ek variable me store krke rkhte h



app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/create',(req,res)=>{
  const {FileName, FileData} = req.body
  const FilePath = "./uploads/" + FileName
// console.log(FileName,FileData)
fs.writeFile(FilePath,FileData,(err)=>{
    if(err){
        console.log(err)
        res.send("error")
    }else{
        res.send("file created succesfully")
    }
    
})


})

app.get('/read/:fileName',(req,res)=>{
    const fileName = req.params.fileName
    const filePath = "./uploads/" +fileName
fs.readFile(filePath,{
    encoding:'utf-8'
},
(err,data)=>{
    if(err){
        res.send("Error Occured")
    }else{
        res.send(data)
    }
})
    // res.send(fileName)
})

app.patch('/update/:fileName',(req ,res)=>{
    const FileData = req.body.FileData
    const FileName = req.params.fileName
    const FilePath = './uploads/'+FileName
    fs.writeFile(FilePath,FileData,(err)=>{
        if(err){
            res.send("Error")
        }else{
            res.send("File Updated sucessfully")
        }
    })
})

app.delete('/delete/:fileName',(req,res)=>{
const fileName = req.params.fileName
const filePath = './uploads/'+fileName

fs.unlink(filePath,(err)=>{
    if(err){
        res.send("error occurred")
    }else{
        res.send("file deleted successully")
    }
})

})

app.get('/get-all',(req,res)=>{
    fs.readdir('/uploads/',(err,files,)=>{
if(err){
    res.send("error ")
    console.log(err)
}else{
    res.send(files)
}
    })
})


app.listen(3000,()=>{
    console.log('Server is Running on port 3000 ')
})