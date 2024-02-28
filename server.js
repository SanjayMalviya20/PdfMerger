const express = require("express")
const app = express()
const port =3000;
const path =require("path")
const multer  = require('multer')        //multer use for uploading files .its of node js middleware for handling multipart/form-data
 const upload = multer({ dest: 'uploads/' })    //destination of folder 
app.use("/static",express.static("public"))
const {mergerPDF} =require("./merge")   // {mergerPDF} destrucring use for export from other


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"template/index.html") )                    //use path module for serving files
})


app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {  
console.log(req.files)
//  res.send({data:req.files})                                    //save data in upload file
let c=await mergerPDF(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))      //gives parameters as files
res.redirect(`http://localhost:3000/static/${c}.pdf`)       //  pdf merge in mergerPDF.pdf 
  })



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

