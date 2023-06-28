import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const { setMessage, user } = useContext(AuthContext);
    const [latestTask, setLatestTask] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [taskList, setTaskList] = useState(null);
    //create task function
    const createTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch("http://localhost:5000/tasks", config);
        if (response.ok) {
            setMessage("Task created successfully");
            getAllTasks();
            setTimeout(() => {
                setMessage("");
            }, 1000)
        } else {
            setMessage("Something went wrong, please try again");
        }
    }

    //get tasks
    const getAllTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, { method: "GET" });
            if (response.ok) {
                const tasks = await response.json();
                setTaskList(tasks);

                const latest = tasks[tasks.length - 1];
                setLatestTask(latest);

                const recentTask = tasks.slice(-3);
                setRecentTasks(recentTask);
                recentTask.reverse();

            } else {
                alert("something went wrong");
            }
        } catch (err) {
            console.log(err);
        }
    }



    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`http://localhost:5000/tasks/${formData.id}`, config);
        if (response.ok) {
            setMessage("Task created successfully");
            getAllTasks();
            setTimeout(() => {
                setMessage("");
            }, 1000)
        } else {
            setMessage("Something went wrong, please try again");
        }
    }
    //update task



    useEffect(() => {
        if (user !== null) {
            getAllTasks();
        }
    }, [user])

    return (
        <TaskContext.Provider value={{
            createTask,
            latestTask,
            recentTasks,
            taskList,
            updateTask

        }}>
            {children}
        </TaskContext.Provider>
    )



}


export default TaskContext;