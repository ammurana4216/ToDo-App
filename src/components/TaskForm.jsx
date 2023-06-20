import React from 'react';

function TaskForm(props) {
    return (
        <div className='p-3 w-75'>
            <h3 className='mb-3 text white'>Create Task</h3>
            <div className='card'>
                <div className='card-body'>
            <form>
               <div className="mb-3">
                <label className ="form-label">Title</label>
                <input type ="text" name='title' className='form-control'/>

               </div>
               <div className="mb-3">
                <label className ="form-label">Discription</label>
                <textarea name='discription' className='form-control' rows ="8"></textarea>

               </div>
               <div className="mb-3">
                <label className ="form-label">Date & Time</label>
                <input type ="datetime-local" name='duedate' className='form-control'/>

               </div>
               <button className='btn btn-primary'>Create Task</button>

            </form>
            </div>
            </div>
        </div>
    );
}
export default TaskForm;