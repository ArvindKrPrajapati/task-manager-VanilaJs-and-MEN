

  "use-strict";
  const button=document.querySelector(".save");           
  const task=document.querySelector("#name");
  const error=document.querySelector(".error");
  const err=document.querySelector(".err");
  const success=document.querySelector(".success");
  const taskDiv=document.querySelector(".tasks");
  
  const url="http://localhost:1432/api/v1/tasks";
 
  button.addEventListener("click",()=>{
   const taskName=task.value;
   task.value="";
    if(taskName){
      saveData(taskName);
      error.innerText="";
    }else{
      error.innerText="*enter some text";
    }
  });
  
  const saveData=(task)=>{
    fetch(url,{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:task})
    }).then((res)=>res.json()).then((data)=>{
      if(data.status){
        success.innerText="Inserted successfully";
        loadData();
        setTimeout(()=>{success.innerText="";}, 2000);
      }else{
        err.innerText="failed to insert";
        setTimeout(()=>{err.innerText="";}, 2000);
      }
    }).catch((err)=>{
      console.log(JSON.stringify(err));
    });
  }
  
const loadData=()=>{
    fetch(url).then((res)=>res.json()).then((data)=>{
     taskDiv.innerHTML=data.map((mytask)=>{
         return `<div class="task" style="${mytask.completed ? 'border-left:3px solid green' : ''}">
                  <div class="mytask">
                   <strong style="color:green; display:${mytask.completed ? 'inline' : 'none'}">✓ </strong>${mytask.name}
                   </div>
                   <div class="btns">
                    <button onclick="goEdit('${mytask._id}')">edit</button>
                    <button onclick="deleteTask('${mytask._id}')">Delete</button>
                   </div>
                 </div>`;
       }).join("");
     }).catch((err)=>{
      console.log(JSON.stringify(err));
    });
  }
  
  
  const goEdit=(id)=>{
    window.location.href="/edit/?id="+id;
  }
  const deleteTask=(id)=>{
    const newUrl=url+"/"+id;
    fetch(newUrl,{
      method:"DELETE"
    }).then((res)=>res.json())
    .then((data)=>{
      if(data.status){
       loadData();
      }else{
        alert("error while deleting");
      }
    });
  }