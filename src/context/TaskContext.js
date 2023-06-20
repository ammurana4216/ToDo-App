import {  createContext } from "react";

const TaskContext = createContext();

const TaskProvider =({children})=>{
    
    const createTask = async(formData) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
console.log("formData", formData);
        }

    return(
        <TaskContext.Provider value={{

        }}>
            {children}
        </TaskContext.Provider>
    )
    }
}
export default TaskContext;
