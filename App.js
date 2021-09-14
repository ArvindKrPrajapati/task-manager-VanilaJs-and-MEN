
  const express=require("express");    
  const app=express();
  const tasks=require("./routes/tasks");
  const connectDB=require("./db/connect");
  require("dotenv").config();
  
  app.use(express.json());
  app.use("/api/v1/tasks",tasks);
  
  
  const start=async ()=>{
    try {
      await connectDB(process.env.URL);
      app.listen(1432,console.log("listening at port 1432.."));     
    } catch (e) {
      console.log(e);
    }
  }
  
  //call start function
  start();