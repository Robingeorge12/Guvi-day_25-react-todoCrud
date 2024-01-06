import React, { useState } from "react";
import "./Todo.css";
import TodoInput from "../TodoInput/TodoInput";
import "bootstrap/dist/js/bootstrap.bundle.min";
import EditModal from "../EditModal/EditModal";
// data,setTodo,todo,edit, setEdit,handleEdit,handleDelete,handleUpdate,handleStatusUpdate,handleFilter
const data = [
  {
    id: 1,
    taskName: "React Learning",
    desc: "I have to learn all concepts of react from scratch",
    status: "Not Completed",
  },
  {
    id: 2,
    taskName: "Redux Learning Steps",
    desc: "Redux is a state management tool across all components of the app",
    status: "Completed",
  },
  {
    id: 3,
    taskName: "Javascript Learning",
    desc: "Javascript is the most popular language in the world",
    status: "Not Completed",
  },
  {
    id: 4,
    taskName: "Node JS",
    desc: "It is an environment where we can run javascript",
    status: "Not Completed",
  },
];
function Todo({}) {
  const [todo, setTodo] = useState(data);
  const [edit, setEdit] = useState(null);
  // console.log(data,todo)
  const [state, setState] = useState("All");
  const handleEdit = (el) => {
    setEdit(el);
  };
  const handleUpdate = (ed) => {
    setTodo((prevTodo) =>
      prevTodo.map((e) => {
        if (e.id === ed.id) {
          alert("Updated Successfully");
          return { ...e, ...ed } ;
        }
        return e;
      })
    );
      

  };

  const handleStatusUpdate = (value, id) => {
    console.log(value, id);

    setTodo((prevTodo) =>
      prevTodo.map((e) => {
        if (e.id === id) {
          return { ...e, status: value };
        }
        return e;
      })
    );

  };

  console.log(todo);

  const handleFilter = (value) => {
    // if (value === "Completed") {
    //   let upDateTodo = todo?.filter((e) => e.status === "Completed");
    //   setTodo(upDateTodo);
    // } else if (value === "Not Completed") {
    //   let upDateTodo = todo?.filter((e) => e.status === "Not Completed");
    //   setTodo(upDateTodo);
    // } else if (value === "All") {
    //   setTodo(data);
    // }
  };

  const handleDelete = (id) => {
    let upDateTodo = todo?.filter((e) => e.id !== id);
    setTodo(upDateTodo);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center Todocontainer">
      <TodoInput todo={todo} setTodo={setTodo} />
      <hr style={{ width: "100%", marginTop: "0px", marginBottom: "24px" }} />
      <div className="container d-flex flex-column bg-info-subtle py-4 TodoSubDiv">
        <div className="d-flex align-items-center justify-content-between fil">
          <h5 className="text-center text-info">My Todos</h5>
          <div className="d-flex align-items-center justify-content-around filterDiv">
            <h5 className="text text-info">Filter</h5>
            <span className="px-2"></span>
            <select
              onChange={(e) => setState(e.target.value)}
              className="bg-warning border-0 text-info filterSel"
              id=""
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </div>
       
        <div className="row d-flex align-items-center justify-content-between">
          {todo?.map((el, i) => {
           
            if ( el.status !== state && state !== "All") {
              return "";
            }
            return (
              <div key={i} className="col-sm-12 mt-3 col-md-6 col-lg-4 ">
                <div
                  className="card d-flex text-start flex-column bg-primary justify-content-start cardDiv"
                  style={{ "--bs-bg-opacity": 0.5 }}
                >
                  <p className="title ml-2">
                    Name :<span className="px-2"></span>
                    <span className="text-white fw-bold">{el.taskName}</span>
                  </p>
                  <p className="title pt-2 d-flex overflow-auto todo-desc">
                    Description :<span className="px-2"></span>
                    <span className="text-warning">{el.desc}</span>
                  </p>
                  <div className="py-3 pt-2 sel">
                    <label htmlFor="">
                      Status: <span className="px-2"></span>
                    </label>

                    <select
                      onChange={(e) =>
                        handleStatusUpdate(e.target.value, el.id)
                      }
                      value={`${el.status}`}
                      className="bg-warning border-0 rounded px-2 text-white"
                    >
                      <option value="Not Completed">Not Completed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center justify-content-end mr-3 gap-2 py-3 but">
                    {/* <button onClick={() =>handleEdit(el)} className="btn btn-success edit">Edit</button> */}
                    {/* modal */}
                    <div>
                      {" "}
                      <button
                        onClick={() => handleEdit(el)}
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                        style={{ width: "71px" }}
                      >
                        Edit
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                TODO UPDATION
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label text-success fw-bold"
                                  >
                                    Name:
                                  </label>
                                  <input
                                    type="text"
                                    value={edit ? edit.taskName : ""}
                                    onChange={(e) =>
                                      setEdit({
                                        ...edit,
                                        taskName: e.target.value,
                                      })
                                    }
                                    className="form-control recipient-name"
                                    // id="recipient-name"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label text-success fw-bold"
                                  >
                                    Description:
                                  </label>
                                  <textarea
                                    className="form-control message-text"
                                    value={edit ? edit.desc : ""}
                                    onChange={(e) =>
                                      setEdit({ ...edit, desc: e.target.value })
                                    }
                                    // id="message-text"
                                  ></textarea>
                                </div>

                                <label
                                  htmlFor="message-text"
                                  className="col-form-label text-danger fw-bold"
                                >
                                  Status:
                                </label>
                                <div className="mb-3 form-floating">
                                  <select
                                    className="form-select"
                                    id="floatingSelect"
                                    aria-label="Floating label select example"
                                    value={edit ? edit.status : ""}
                                    onChange={(e) =>
                                      setEdit({
                                        ...edit,
                                        status: e.target.value,
                                      })
                                    }
                                  >
                                    <option defaultValue={`Not Completed`}>
                                      Not Completed
                                    </option>
                                    <option value="Completed">Completed</option>
                                    {/* <option value="Not Completed">Not Completed</option> */}
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdate(edit)}
                                className="btn btn-primary"
                              >
                                Updated
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal */}
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
          data-bs-whatever="@mdo" style={{width:"71px"}}>Edit</button> */}
          {/* { <EditModal exampleModal={"data-bs-target"}  />} */}
        </div>
      </div>
    </div>
  );
}

export default Todo;
