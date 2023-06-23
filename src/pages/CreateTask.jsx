import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';

function CreateTask(props) {
  const {latestTask, recentTask} = useContext(TaskContext);


    return (
        <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-6 bg-primary text-white h-100 d-flex flex-column align-items-center justify-content-center">
          <TaskForm/>
 

        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card home-card bg-primary text-white w-50 shadow-sm rounded-0">
            <div className="card-header bg-transparent border-0 d-flex">
             <h3>Latest Task </h3>
             <button className="btn btn-info ms-auto">Edit</button>
            </div>
            <div className="card-body p-4">
{latestTask?
              <>
              <h4 className='border-bottom pb-2'>{latestTask.title}</h4>
              <p>{latestTask.description}</p>
              <div className='d-flex'>
                <p>created On :{latestTask.modifiedOn}</p>
              <p>duedate: {latestTask.duedate }</p>
              
              </div>
            </>:""
             } 

</div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CreateTask;