 
 
  
  
  
  const mongoose=require("mongoose");            
  const date=new Date();
  const now=(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()).toString();      
  const taskSchema=new mongoose.Schema({
    name:{
      type:String,
      trim:true,
      required:[true,"name is required"]
    },
    completed:{
      type:Boolean,
      default:false
    },
    taskDate:{
      type:String,
      default:now
    }
    
  });
  
  module.exports=mongoose.model("task",taskSchema);    