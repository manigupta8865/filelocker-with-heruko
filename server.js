const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose")
const bodyparser=require("body-parser")
const app = express();
const PORT=process.env.PORT||5000
app.use(fileUpload());
const File =require("./model/FileSchema")


mongoose.connect("mongodb+srv://mani:mani@cluster0.rqkkf.mongodb.net/<FileSaver>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},()=>console.log("success")).catch(error=>{
    console.log(error.reason)
})



app.get("/details",async(req, res)=> {
  const result=await File.find({})    // FACE SOE ERROR I WILL CORRECT IT LATTER SIR
  res.send(result);
    })



// Upload Endpoint
app.post('/',async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;
  const fname=file.name
  const fpath=`${__dirname}/client/public/uploads/${file.name}`
  
   const fileDetail=new File({
     FileName:fname,
     FilePath:fpath
   })
     await fileDetail.save();
   
  
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))

  })
}

app.listen(PORT, () => console.log('Server Started...'));
