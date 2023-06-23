import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";


function Login(props) {
    const [formData, setFormData]= useState();
    const {message , login , setMessage} =useContext(AuthContext);
    
    useEffect(()=>{
     setMessage("");
    },[]);
    
    const handleChange=(e)=>{
        let { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
    }

    const submitForm = async (e) => {
        e.preventDefault();
        login(formData);
      };
    

      // console.log('message', message)
      
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="">
          Email
        </label>
        <input type="email" name="email" className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="">
          Password
        </label>
        <input type="password" name="password" className="form-control" onChange={handleChange}/>
      </div>
      <p>{message}</p>
      <button className="btn btn-primary" onClick={submitForm}>Login</button>

      <p>Having Problem in registering? <Link to='/about'>click here</Link> for help{""} </p>
    </form>
  );
}

export default Login;