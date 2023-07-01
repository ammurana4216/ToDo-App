import React from 'react';
import { dateFormat } from '../helper';
import TaskForm from '../components/TaskForm'



function PopUp(props) {
  const { option } = props;
  const { type, data } = option;

  return (
    <div className="modal" tabIndex="-1" id="task-modal">
      <div className="modal-dialog">
        <div className="modal-content bg-primary  text-white">
          <div className="modal-header">
            <h5 className="modal-title">Tasks created by you</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {
              type === "view" ?
                <div>
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                  <div className='d-flex'> :
                    <p>Modified On: {data.modifiedOn}</p>
                    <p className="ms-auto">Due Date :{dateFormat(data.duedate)}</p>
                    </div>
                  </div> : type === "edit" ?
                  <div>
                    <TaskForm isUpdate={true} data={data} />
                  </div> :
                  <div>
                    Delete
                  </div>
             }
                </div>
         
        </div>
      </div>
    </div>
  );
}

export default PopUp;