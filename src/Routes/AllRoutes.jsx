import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Todo from '../components/Todo/Todo'
import TodoInput from '../components/TodoInput/TodoInput'

const data = [
  {
    id: 1,
    taskName: "task1",
    desc: "desc1",
    status: "Not Completed",
  },
  {
    id: 2,
    taskName: "task2",
    desc: "desc1",
    status: "Completed",
  },
  {
    id: 3,
    taskName: "task3",
    desc: "desc1",
    status: "Not Completed",
  },
  {
    id: 4,
    taskName: "task4",
    desc: "desc1",
    status: "Not Completed",
  },
];

function AllRoutes() {

  const [todo, setTodo] = useState(data);
  const [edit, setEdit] = useState(null);


  const handleEdit = (el) => {
    setEdit(el);
  };
  const handleUpdate = (ed) => {



    setTodo((prevTodo) =>
    prevTodo.map((e) => {
      if (e.id === ed.id) {
        return { ...e, ...ed };
      }
      return e;
    }))
    console.log(ed)
    console.log(todo);
    // let upDateTodo = todo?.map((e) => {
    //   // console.log(todo);
    //   if (e.id === ed.id) {
    //    return setTodo({ ...e, ...ed });
       
    //   }
    //   return e;
    // });
    // console.log(upDateTodo);
    // setTodo(upDateTodo);
    // console.log(todo);
  };

  const handleStatusUpdate = (value,id) => {
    console.log(value,id)

    setTodo((prevTodo) =>
    prevTodo.map((e) => {

      if (e.id === id) {
        return { ...e,status:value};
      }
      return e;
    })
  );

  console.log(todo)
  }


  console.log(todo)

  const handleFilter = (value) => {
    
    if(value === "Completed"){
      let upDateTodo = todo?.filter((e) => e.status === "Completed");
      setTodo(upDateTodo);
    }
    else if(value === "Not Completed"){
      let upDateTodo = todo?.filter((e) => e.status === "Not Completed");
      setTodo(upDateTodo);
    }else{
      setTodo(data);
    }

  }
  
  const handleDelete = (id) => {
    let upDateTodo = todo?.filter((e) => e.id !== id);
    setTodo(upDateTodo);
  };

  return (
 <Routes>
<Route path="/"  data= {"data"} todo={todo} setTodo={setTodo} element={<Todo edit={edit} handleEdit={handleEdit} handleUpdate={handleUpdate} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} handleFilter={handleFilter}
 setEdit={setEdit} data= {data} todo={todo} setTodo={setTodo} />} />
{/* <Route path="" element={<TodoInput />} /> */}
{/* <Route path="" element={< />} /> */}

 </Routes>
  )
}

export default AllRoutes