import { createContext, useContext, useState } from "react";

// Create the context
const TaskContext = createContext();

// Provider to provide the context into the child components
export default function TaskProvider(props) {
    let [tasks, setTasks] = useState([]);

    // Create an add task fn which executes the setTask 
    // setTask accepts the list of the previous tasks and add the new task
    const addTask = (task) => setTasks((prev) => [...prev, task]);

    // Delete task function
    const deleteTask = (id) => setTasks((prev) => prev.filter((task) => task.id != id))

    // Edit a task
    const editTask = (updatedTask) => {
        setTasks((prev) =>
            prev.map(
                (task) => (
                    task.id === updatedTask.id ?
                        { ...task, ...updatedTask } :
                        task
                )
            ))
    }

    // make sure to return individual task 
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}

// Create a custom hook to unpack the context and return it
// This allows to only call useTasks() when we want to access the context
export function useTasks() {
    let context = useContext(TaskContext);
    if (!context) {
        console.log("No Task found.")
    }
    return context;
}