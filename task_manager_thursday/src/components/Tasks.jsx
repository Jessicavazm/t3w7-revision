import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { useTasks } from '../contexts/TaskContext';

// import hooks
const tasks = useTasks();
console.log(tasks)


const Tasks = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    // fn that mimics the deleted fn by creating a new array
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id != id);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h2>Tasks</h2>
            {
                tasks.length === 0 ? (
                    <p>No tasks found. <Link to='/add-task'>Add your first task!</Link></p>
                ) : (
                    <ul>
                        {tasks.map((task) =>
                        (<li key={task.id}>
                            <strong>{task.title}</strong>:{task.description}
                            <div>
                                <Link to={`/edit-task/${task.id}`}>Edit</Link> | {' '}
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </li>)
                        )}
                    </ul>
                )
            }
        </div>
    )
};

export default Tasks;