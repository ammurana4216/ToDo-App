import React from 'react';
import TaskForm from '../components/TaskForm';

function CreateTask(props) {
    return (
        <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-6 bg-primary text-white h-100 d-flex flex-column align-items-center justify-content-center">
          <TaskForm/>
 

        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card home-card bg-primary text-white w-50 shadow-sm rounded-0">
            <div className="card-body p-4"></div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CreateTask;