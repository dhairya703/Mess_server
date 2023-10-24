const mongoose=require("mongoose");
let dataSchema=new mongoose.Schema({
    pday: String,
    pmeals: 
      {
        pmealtime: String,
        pmeal: String,
      },
    
  });

module.exports =mongoose.model("Mess",dataSchema)