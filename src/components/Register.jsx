import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register(props) {
    const [formData, setFormData]= useState();

    const handleChange =(e)=>{
        // console.log(e);
        let { name , value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] : value 
        }))
    }
    return (
        <div>
                <form>
        <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email" name='name' className='form-control'onChange={handleChange} />
        </div>
        <div className='mb-3'>
            <label htmlFor="">User Name</label>
            <input type ="uname" name='name' className='form-control'onChange={handleChange}/>
            
             </div>
             <div className='mb-3'>
            <label htmlFor="">Password</label>
            <input type ="password" name='name' className='form-control'onChange={handleChange}/>
            
             </div>
             <br/>
             <button className='btn btn-primary'>Login</button>
             <br/>
             <br/>
             <h6>
                
                <p>Forgot Username/Password ? <Link to=''>Click here to reset.</Link></p> 
             </h6>
       </form>
        </div>
    );
}

export default Register;