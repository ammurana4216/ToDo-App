import {  createContext, useState } from "react";

const TaskContext = createContext();


export const TaskProvider =({children})=>{
    const[task,setTask]=useState(null);
const[message,setMessage]=useState("");
   

        } 
    
     const response = await fetch('http://localhost:5000/tasks', options);
     console.log(response);

     if(response.ok)
     {
        setMessage("Task is Created");

        const taskData=await response.json();

        localStorage.setItem("task" ,JSON.stringify(taskData));
        setTask(taskData)

     }
     else{
        setMessage("Something went wrong!try again");
     }
    }

    return(
        <TaskContext.Provider value={{
        createTask,
        message
        }}>
            {children}
        </TaskContext.Provider>
    )
    
}
export default TaskContext;

