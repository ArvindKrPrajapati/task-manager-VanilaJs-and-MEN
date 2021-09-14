 
 
 
 
  const getAllTasks=(req,res)=>{
    res.send("get all tasks");
  }
  const getTask=(req,res)=>{
    res.send("get single tasks");
  }
  const createTask=(req,res)=>{
    res.json(req.body);
    console.log(req.body);
  }
  const updateTask=(req,res)=>{
    res.send("update tasks");
  }
  const deleteTask=(req,res)=>{
    res.send("delete tasks");
  }
  
  module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
  }