import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../contexts/TaskContext';

const EditTask = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();
    const { tasks, editTask } = useTasks();

    // Find the task based on the ID from the URL
    const [task, setTask] = useState(null);

    // Finds the specific task and sets the new value to it 
    useEffect(() => {
        // Find the task
        const foundTask = tasks.find((task) => id === id);
        // If found
        if (foundTask) {
            // Update the task
            setTask(foundTask);
        }
        // Else
        else {
            // Send error msg
            console.error(`Task with ID ${id} not found.`);
            // Redirect to /tasks
            navigate('/tasks');
        }
    }
        , [id, tasks, navigate]);

    // Function to handle the updates on title and description fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the task in context
        editTask(task);

        // This navigates to 'tasks' page
        navigate('/tasks');
    };

    // Wait for the task to load
    if (!task) {
        return <p>Loading Task...</p>;
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <p>Task ID: {id}</p>
            <p>Here, you will view or edit the task details.</p>
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
                <button type='submit'>Save Changes</button>
            </form>
        </div>
    )
};

export default EditTask;