import { createContext, useState } from "react";

const TaskContext = createContext();

// Props is passed here so any other component can access it
export default function TaskProvider(props){
    let [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider value={tasks}>
            {props.children}
        </TaskContext.Provider>
    )
}

// Create a custom hook to unpack the list
export function useTasks() {
    console.log('Passing data around.')
}