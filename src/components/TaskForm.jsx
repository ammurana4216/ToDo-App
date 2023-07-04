import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";
import TaskList from "../pages/TaskList";

const init = {
  title: "",
  description: "",
  duedate: ""
}


function TaskForm(props) {
  const [formData, setFormData] = useState(init);
  const { isUpdate, data, setIsUpdate, btnRef, isPopup } = props;
  const { createTask, updateTask } = useContext(TaskContext);
  const { message, setMessage, user } = useContext(AuthContext);



  useEffect(() => {
    setMessage("");
    if (isUpdate) {
      setFormData(data);
    }
  }, [isUpdate, data])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      userId: user.id,
      modifiedOn: Date()

    }))
  }


  const submitForm = (e) => {
    e.preventDefault();
    createTask(formData);
    setFormData(init);
  }

  const submitUpdate = (e) => {
    e.preventDefault();
    updateTask(formData);
  }

  const onCancel = (e) => {
    e.preventDefault();
    setFormData(init);
    if (!isPopup) {
      setIsUpdate(false);
      setTimeout(() => {
        setMessage("");
      }, 1000)
    } else {
      btnRef.current.click();
    }

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
                  <button className="btn btn-primary" onClick={submitUpdate} >Update</button>

                  <button className="btn btn-danger ms-3 " onClick={onCancel}> Cancel</button>
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