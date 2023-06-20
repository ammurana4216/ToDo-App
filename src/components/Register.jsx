 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

function Register(props) {
  const [formData, setFormData]= useState();
 const {message, register , setMessage}  = useContext(AuthContext);

 useEffect(()=>{
  setMessage("");
 },[]);
 
 
 const handleChange=(e)=>{
      let { name, value } = e.target;
      setFormData((prev)=>({
          ...prev,
          [name]: value
      }))
  }

  
  const submitForm=async(e)=>{
   e.preventDefault()
    register(formData);
  }
       
  return (
    <form>
      <p>{message}</p>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" className="form-control" onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" className="form-control" onChange={handleChange} />
      </div>
      
      <button className="btn btn-primary" onClick={submitForm}>Register</button>   
      <br/>
      <br/>
      <p>Having problem in registering?<Link to ='/about'>Click Here</Link>to help</p> 
    </form>
  );
}

export default Register;