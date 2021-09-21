
  const express=require("express");    
  const app=express();
  const tasks=require("./routes/tasks");
  const connectDB=require("./db/connect");
  const cors=require("cors");
  require("dotenv").config();
  
  
  app.use(cors());
  app.use(express.json());
  app.use("/api/v1/tasks",tasks);
  
  app.use(express.static("./public_html"));
  
  const start=async ()=>{
    try {
      await connectDB(process.env.URL);
      app.listen(1432,console.log("task manager is listening at http://localhost:1432"));     
    } catch (e) {
      console.log(e);
    }
  }
  
  //call start function
  start();