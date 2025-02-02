import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use'

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [tasks, setTasks] = useLocalStorage('tasks', [])
    // Hook that returns a function for internal routing.
    const navigate = useNavigate();

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
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description: </label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
};

export default AddTask;