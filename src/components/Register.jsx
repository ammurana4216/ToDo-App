import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formData, setFormData]= useState();
  const [message, setMessage] = useState("");

  const handleChange=(e)=>{
      let { name, value } = e.target;
      setFormData((prev)=>({
          ...prev,
          [name]: value
      }))
  }

  const submitForm=async(e)=>{
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    
  

  const checkUser = await fetch (`http://localhost:5000/users?email=${formData.email}`, {method:"GET"})
  if(checkUser.ok){
    const user = await checkUser.json();
    if(user.length >0){
      setMessage("User aleardy exists");
      }else{const response = await fetch('http://localhost:5000/users', options);
      if(response.ok){
        setMessage("Registered Successfully");
      }else{
        setMessage("Something went wrong, please try again");
      }

      } 
  }
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
        <label className="form-label">
          Email
        </label>
        <input type="email" name="email" className="form-control" onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="">
          Password
        </label>
        <input type="password" name="password" className="form-control" onChange={handleChange}/>
      </div>
      
      <button className="btn btn-primary" onClick={submitForm}>Register</button>   
      <br/>
      <br/>
      <p>Having problem in registering?<Link to ='/about'>Click Here</Link>to help</p> 
    </form>
  );
}

export default Register;