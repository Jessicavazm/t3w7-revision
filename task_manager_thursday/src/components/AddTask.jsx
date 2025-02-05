import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';

const AddTask = () => {
    const [task, setTask] = useState({
        title: '', description: ''
    });

    // Import 'useTasks' hook
    const { addTask } = useTasks();

    // Hook that returns a function for internal routing.
    const navigate = useNavigate();

    // Function to handle the updates on title and description fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        // prevents the page to be reloaded
        e.preventDefault();

        addTask({ ...task, id: Date.now().toString() });

        // This navigates to 'tasks' page
        navigate('/tasks');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                    type="text" 
                    name="title" 
                    value={task.title} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea
                    name="description" 
                    value={task.description} 
                    onChange={handleChange} required />
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
};
export default AddTask;