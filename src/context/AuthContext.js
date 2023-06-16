import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [user, setUser]= useState(null);
    const [message, setMessage]=useState("");
    const [formData, setFormData]= useState("");
    const navigate = useNavigate();
    
    
    //register user
    
    const register = async(formData)=>{
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
    
        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method: "GET"})
        if(checkUser.ok){
          const user = await checkUser.json();
          if(user.length > 0){
            setMessage("user already exist");
          }else{
            const response = await fetch('http://localhost:5000/users', options);
            if(response.ok){
              setMessage("Registered Successfully");
              const userData = await response.json();
              localStorage.setItem("user", JSON.stringify(userData));
              setUser(userData);
              setTimeout(()=>{
              navigate('/task-list');
              }, 2000);
            }else{
              setMessage("Something went wrong, please try again");
            }
          }
        }else{
          setMessage("something went wrong, please try again");
        }  
      }
     //login user.

      const login = async(formData)=>{
      const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method: "GET"});
    const user = await response.json();
    if(response.ok){
      if(user.length > 0){
        setMessage("Logged in Successfully");
        const userData = JSON.stringify(user[0]);
        localStorage.setItem("user", userData);
        setUser(userData);
        setTimeout(()=>{
          navigate('/task-list');
        }, 2000);
      }else{
        setMessage("Email/Password not correct");
      }
    }else{
      setMessage("Something went wrong, please try again.");
    }
  }
    useEffect(()=>{
        
      const localUser = localStorage.getItem("user");
        const user = JSON.parse(localUser);
        setUser(user);
      }, [])

      return(
        <AuthContext.Provider value={{
            user,
            message,
            register,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
      
  }


export default AuthContext;