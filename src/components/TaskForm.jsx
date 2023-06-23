import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';




function TaskForm(props) {
    const [formData, setFormData] = useState();
    const {createTask} = useContext(TaskContext);
    const {message , setMessage, user} = useContext(AuthContext);

    useEffect(()=>{
        setMessage("");
    },[])

const handleChange=(e)=>{
    let {name, value} =e.target;
    setFormData((prev)=>({
      ...prev, 
      [name] : value,
      userId:user.Id,
      modifiedOn:Date()
    }))
}

const submitForm =async(e)=>{
    e.preventDefault()
    createTask(formData);
}
    return (

        <div className='p-3 w-75'>
            <h3 className='mb-3 text white'>Create Task</h3>
            <div className='card'>
                <div className='card-body'>
            <form>
                <p style={{color:"green"}}>{message}</p>
               <div className="mb-3">
                <label className ="form-label" htmlFor='title' >Title</label>
                <input type ="text" id="title" name='title' className='form-control' onChange={handleChange}/>

               </div>
               <div className="mb-3">
                <label className ="form-label" htmlFor='description` '>Description</label>
                <textarea name='description' className='form-control' rows ="8" id="description" onChange={handleChange}></textarea>

               </div>
               <div className="mb-3">
                <label className ="form-label" htmlFor='date&time'>Date & Time</label>
                <input type ="datetime-local" name='duedate' className='form-control' onChange={handleChange}/>

               </div>
             <button className='btn btn-secondary' onClick={submitForm}>Create Task</button>

            </form>
            </div>
            </div>
        </div>
    );
}
export default TaskForm;