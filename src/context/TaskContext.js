import {  createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();


export const TaskProvider =({children})=>{
    const[task,setTask]=useState(null);
const{setMessage, message } = useContext(AuthContext)
   

    const createTask = async(formData)=>{

        const options ={
           method: "POST",
           headers:{
            "Content-Type" : "application/json"
           },
           body: JSON.stringify(formData)
        } 
    try{
     const response = await fetch('http://localhost:5000/tasks', options);
     console.log(response);

     if(response.ok){
        setMessage("Task is Created");

        const taskData = await response.json();

        //localStorage.setItem("task" ,JSON.stringify(taskData));
        setTask(taskData)

     }
     else{setMessage("Something went wrong!try again");
     }

     
    } catch(err){
        console.log(err);
    }


}
    
return(
        <TaskContext.Provider value={{
        createTask,
       message,
        setMessage
        }}>
            {children}
        </TaskContext.Provider>
    )
    
}
export default TaskContext;
