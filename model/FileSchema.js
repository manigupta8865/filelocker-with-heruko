const mongoose=require("mongoose")
const fileSchema=new mongoose.Schema({
    FileName:{
        type:"string",
        require:true
    },  
     
    FilePath:{
        type:"string",
        require:true
      }

})

const newFileModel=mongoose.model("File",fileSchema)
module.exports= newFileModel
