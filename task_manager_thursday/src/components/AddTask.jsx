import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { useTasks } from '../contexts/TaskContext';

const { addTask } = useTasks()

const AddTask = () => {
    const [task, setTask] = useState({
        title: '', description: ''
    });

    // Import 'useTasks' hook
    const { AddTask } = useTasks();
    
    // Hook that returns a function for internal routing.
    const navigate = useNavigate();

    // Function to handle the updates on title and description fields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask((prev), ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        // prevents the page to be reloaded
        e.preventDefault();

        // Store the values into a variable
        const newTask = {
            id: Date.now(),
            title,
            description
        };

        // Add new task to existing tasks using ... Spread operator
        setTasks([...tasks, newTask]);
        // This navigates to 'tasks' page
        navigate('/tasks');
    }
    
    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={ handleSubmit }> 
                <div>
                    <label>Title</label>
                    <input value={title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description: </label>
                    <input value={description} onChange={handleChange} required />
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
};

export default AddTask;