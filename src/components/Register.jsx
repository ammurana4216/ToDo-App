import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  const [formData, setFormData]= useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
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
;
      }else
      {const response = await fetch('http://localhost:5000/users', options);
      console.log(response);
      if(response.ok){
        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData))
       setMessage("Registered Successfully");
       setTimeout(()=>{
        navigate("/task-list");
       }, 3000);
      
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