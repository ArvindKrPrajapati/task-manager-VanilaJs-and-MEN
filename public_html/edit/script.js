


 
  const button=document.querySelector(".edit");           
  const task=document.querySelector("#name");
  const error=document.querySelector(".error");
  const err=document.querySelector(".err");
  const success=document.querySelector(".success");
  const checkboxVal=document.querySelector("#isCompleted");   
  
  const url="http://localhost:1432/api/v1/tasks/"+id;
   
  button.addEventListener("click",()=>{
   const taskName=task.value;
   const isCompleted=checkboxVal.checked;
   task.value="";
    if(taskName){
      updateData(taskName,isCompleted);
      error.innerText="";
    }else{
      error.innerText="*enter some text";
    }
  });
  
  const updateData=(task,isCompleted)=>{
    fetch(url,{
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:task,completed:isCompleted})
    }).then((res)=>res.json()).then((data)=>{
      if(data.status){
        success.innerText="updated successfully";
        loadData();
        setTimeout(()=>{success.innerText="";}, 2000);
      }else{
        err.innerText="failed to update";
        setTimeout(()=>{err.innerText="";}, 2000);
      }
    }).catch((err)=>{
      console.log(JSON.stringify(err));
    });
  }
  
  const loadData=()=>{
    fetch(url).then((res)=>res.json()).then((data)=>{
      task.value=data.name;
      checkboxVal.checked=data.completed;
    });
  }