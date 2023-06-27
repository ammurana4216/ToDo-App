import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

function Register(props) {

  const initialValues = {
    name: "",
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState();
  const [formErrors, setFormErrors] = useState({ });
  const [isSubmit, setIsSubmit] = useState(false);
  const { message, register, setMessage } = useContext(AuthContext);





  useEffect(() => {
    setMessage("");
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);


  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value

    }))
  }



  const submitForm = async (e) => {
    e.preventDefault();
    register(formData);
    setFormErrors(validate(formErrors));
    setIsSubmit(true);

  }


  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.email) {
      errors.name = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This email is not a valid email format"
    }
    if (!values.password) {
      errors.name = "Password is required";
    } else if (!regex.test(values.password)) {
      errors.password = "This password is not a a valid password ";
    } else if (values.password < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password > 12) {
      errors.password = "Password cannot be more than 12 characters";
    }
    return errors;
  }

  return (
    <form>
      <p>{message}</p>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" className="form-control" onChange={handleChange} value={formErrors.name} />
      </div>
      <p >{formErrors.name}</p>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" className="form-control" onChange={handleChange} value={formErrors.email} />
      </div>
      <p>{formErrors.email}</p>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" className="form-control" onChange={handleChange} value={formErrors.password} />
      </div>
      <p >{formErrors.password}</p>
      <button className="btn btn-primary" onClick={submitForm}>Register</button>
      <br />
      <br />
      <p>Having problem in registering?<Link to='/about'>Click Here</Link>to help</p>
    </form>
  );
}

export default Register;