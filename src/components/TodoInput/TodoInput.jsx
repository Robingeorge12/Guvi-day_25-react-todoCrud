import React, { useState } from "react";
import "./TodoInput.css";
function TodoInput({todo,setTodo}) {

  const [taskName,setTaskName] = useState("");
  const [desc,setDesc] = useState("")

  const handleAdd = ()=>{
  
    if(taskName && desc){

      const payload = {
        id: Date.now(),
        taskName: taskName,
        desc: desc,
        status: "Not completed",
      }
      setTodo([...todo,payload]) 
      setTaskName("")
      setDesc("")

  }else{
    alert("Please Fill All Fields")
  }

  

  }

// console.log(todo)

  return (
    <div className="container d-flex flex-column bg-success-subtle align-items-center mb-3 justify-content-center gap-3 inputContainer">
      <h2 className="text-center text-success">My Todo</h2>

      <div className="container d-flex align-items-center justify-content-center gap-3 ">
        <div className="col col-sm-4 col-md-4 col-lg-4">
          <input
            type="text"
            value={taskName}
            className="form-control input1"
            placeholder="enter todo"
            onChange={(e)=>setTaskName(e.target.value)}
          />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <input
            type="text"
            value={desc}
            className="form-control outline-success input2"
            placeholder="enter todo"
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <button onClick={handleAdd} className="btn btn-success">Add Todo</button>
      </div>
    </div>
  );
}

export default TodoInput;
