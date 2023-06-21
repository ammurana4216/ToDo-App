import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//code to create context Api
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {


   //register user
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();
  
 
 

  const register = async(formData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }



    
    const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" })
    if (checkUser.ok) {
      const user = await checkUser.json();
     
      if (user.length > 0) {
        setMessage("user already exist");
      
      } else {
        const response = await fetch('http://localhost:5000/users', options);
        
        if (response.ok) {
          
          setMessage("Registered Successfully");
          const userData = await response.json();
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          setTimeout(() => {
            navigate('/login');
          }, 2000);

        } else {
          setMessage("Something went wrong, please try again");
        }
      }
    } else {
      setMessage("something went wrong, please try again");
    }
  
  }
  //login user.

  const login = async (formData) => {

    const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
    const user = await response.json();
    // console.log('response', response)
    // console.log('user', user)
    if (response.ok) {
      if (user.length > 0) {
        //console.log('user', user)
        setMessage("Logged in Successfully");
        const userData = JSON.stringify(user[0]);
        localStorage.setItem("user", userData);
        setUser(user[0]);
        setTimeout(() =>{
          navigate('/create-task');
        }, 2000);


      } else {
        setMessage("Email/Password not correct");
      }
    } else {
      setMessage("Something went wrong, please try again.");
    }
  }
  
  useEffect(() =>{

    const localUser = localStorage.getItem("user");
    console.log(localUser);

const getUser = async()=>{
  const user = JSON.parse(localUser);
  
  try{
    const response = await fetch(`http://localhost:5000/users?email=${user.email}`);
  if(response.ok){
    const existingUser = await response.json();


   if(existingUser.length >0){
    setUser(existingUser[0]);
   }
 
  }else{
    console.error("something went wrong");

  }
  }  catch(err){
    console.log(err);
  }
}

   if(localUser){

   getUser();
   }
    
 
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      message,
      register,
      login,
      setMessage
    }}>
      {children}
    </AuthContext.Provider>
  )

}


export default AuthContext;