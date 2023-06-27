import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";

const init = {
  title: "",
  description: "",
  duedate: ""
}


function TaskForm(props) {
  const [formData, setFormData] = useState(init);
  const { isUpdate, data } = props;
  const { createTask } = useContext(TaskContext);
  const { message, setMessage, user } = useContext(AuthContext);



  useEffect(() => {
    setMessage("");
    if (isUpdate) {
      setFormData(data);
    }
  }, [isUpdate])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      userId: user.id,
      modifiedOn: Date()

    }))
  }


//   const updateTask = () => {
//     const config = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(isUpdate)
//     }

// const update = await fetch ("http://localhost:5000/tasks/${id}", config) ;
// if (update.ok){

// }
//   }











  const submitForm = (e) => {
    e.preventDefault();
    createTask(formData);
    setFormData(init);
  }
  return (
    <div className="p-3 w-75">
      <h3 className="mb-3 text-white">{isUpdate ? "Update Task" : "Create Task"}</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" >Description</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                rows="8"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Date & Time</label>
              <input
                type="datetime-local"
                name="duedate"
                className="form-control"
                value={formData.duedate}
                onChange={handleChange}
              />
            </div>
            <p className="mb-3">{message}</p>
            {
              isUpdate ?
                <>
                  <button className="btn btn-primary  " >Update</button>

                  <button className="btn btn-danger ms-3 " > Cancel</button>
                </> :
                <button className="btn btn-primary" onClick={submitForm}>Create Task</button>

            }

          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;