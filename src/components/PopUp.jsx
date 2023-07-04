import React, { useContext, useReducer, useRef } from 'react';
import { dateFormat } from '../helper';
import TaskForm from '../components/TaskForm'
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';



function PopUp(props) {
  const { option } = props;
  const { type, data } = option;
  const { deleteTask } = useContext(TaskContext);
  const { message, setMessage } = useContext(AuthContext);

  const { closeButton } = useRef(null);


  const onDelete = () => {
    deleteTask(data.id);
    setTimeout(() => {
      setMessage("");
    },1000)
  }

  // console.log(closeButton.current);

  return (
    <div className="modal" tabIndex="-1" id="task-modal">
      <div className="modal-dialog">
        <div className="modal-content bg-primary  text-white">
          <div className="modal-header">
            {/* <h5 className="modal-title">Tasks created by you</h5> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeButton}></button>
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
                    <TaskForm isUpdate={true} setIsUpdate={false} data={data} btnRef={closeButton} isPopup={true} />
                  </div> :
                  <div>
                    <div className="text-white">
                      <p> {message !== ""
                        ? message :
                        "Do you wany to delete?"
                      }
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-danger ms-auto" onClick={onDelete} >Yes</button>
                        <button className="btn btn-warning ms-2" data-bs-dismiss="modal"  >No</button>
                      </div>
                    </div>
                  </div>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default PopUp;