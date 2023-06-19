import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import AuthContext from '../context/AuthContext';
function Navigation(props) {
const navigate=useNavigate();
  
const { user,setUser}=useContext(AuthContext);


//to log out user and delete the data from both localstorage and userdata
const logout=()=>{
  localStorage.removeItem("user");
  setUser(null);
  navigate('/');



}


    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2  " >

{
  !user?


<>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        </>:
        <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create-task">Create Task</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/task-list">Task List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/task-list">{user?.name}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className='nav-item' onClick={logout}><button className="btn btn-danger">Logout</button>
          
        </li>
      </>
}
      </ul>
      

    </div>
  </div>
</nav>
    );
}

export default Navigation;