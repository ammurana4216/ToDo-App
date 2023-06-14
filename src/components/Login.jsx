import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Login(props) {
    const [formData, setFormData]= useState();
    const [message,setMessage]=useState("");
    const handleChange =(e)=>{
        // console.log(e);
        let { name , value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] : value 
        }))
    }
        const submitForm=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,{method:"GET"});
        const user = await response.json();
        console.log(user);
        if(response.ok){
            if(user.length>0){
                setMessage("Logged in successfully");
                  console.log(user[0]);
                  const userData = JSON.stringify(user[0]);
                  localStorage.setItem("user", userData );

            }else{
                setMessage("User not found");
            }
          }
        else{
            setMessage("Something went wrong! Please try again");
          }
        }

    return (
        <div>
             <form>
                <p style ={{color: "red"}}>{message}</p>
        <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id="email" className='form-control' onChange={handleChange} />
        </div>
        <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type ="password" name='password' id="password" className='form-control' onChange={handleChange} showAndHidePassword />
            
             </div>
             <br/>
             <button className='btn btn-primary' onClick={submitForm}>Login</button>
             <br/>
             <br/>
             <h6>
                <p style={{color: "Red"}}>Forgot Username/Password ? <Link to=''>Click here to reset.</Link></p> 
             </h6>
       </form>
        </div>
    );
}

export default Login;