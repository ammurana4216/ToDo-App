import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { dateFormat } from '../helper';
import PopUp from '../components/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

function TaskList(props) {
    const { taskList } = useContext(TaskContext)


    return (
        <div className='container bg-primary p-5'>
            <div className='d-flex'>
                <h4>Task List</h4>
                <Link className='ms-auto' to='/create-task'>Create Task</Link>

            </div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >Title</th>
                        <th>Description</th>
                        <th>Duedate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        taskList ?
                            taskList.map((item) => {

                                return (
                                    <tr key={item.id} >
                                        <td >{item.title}</td>
                                        <td >{item.description}</td>
                                        <td >{dateFormat(item.duedate)}</td>
                                        <td>
                                            <span className='px-3' data-bs-toggle="modal" data-bs-target="#task-modal">
                                                <FontAwesomeIcon icon={faEye} />
                                            </span>
                                            <span className='px-3' data-bs-toggle="modal" data-bs-target="#task-modal">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </span>
                                            <span className='px-3' data-bs-toggle="modal" data-bs-target="#task-modal">
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </span>
                                        </td>
                                    </tr>

                                )
                            }) : "No data"
                    }

                </tbody>
            </table>
            <PopUp />
        </div >
    );
}

export default TaskList;