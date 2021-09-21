 
 
  const task=require("../models/task-model");          
 
  const getAllTasks=async (req,res)=>{
    try {
      const data=await task.find();
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({msg:e});
    }
  }
  const getTask=async (req,res)=>{
   try {
     const data=await task.findOne({_id:req.params.id});
     if(!data){
       return res.status(404).json({status:false});
     }
     res.status(200).json(data);
   } catch (e) {
      res.status(500).json({msg:e});
   }
 }
  const createTask=async (req,res)=>{
    try {
       const data=await task.create(req.body);
       res.status(201).json({status:true});
    } catch (e) {
      res.status(500).json({status:false});
    }
  }
  const updateTask=async (req,res)=>{
     try {
       const data=await task.findOneAndUpdate({_id:req.params.id},req.body,{new:true});    
       if(!data){
         return req.status(404).json({status:false});
       }
       res.json({status:true});
     } catch (e) {
       req.status(500).json({status:false});
     }
  }
  const deleteTask=async (req,res)=>{
   try {
     const data=await task.findOneAndDelete({_id:req.params.id});
     if(!data){
       return res.status(404).json({status:false});
     }
      res.status(200).json({status:true});
   } catch (e) {
      res.status(500).json({status:false});
   }
  }
  
  module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
  }