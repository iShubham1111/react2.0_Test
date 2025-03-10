// src/components/Todo.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask, updateTask, setFilter } from '../redux/store';
import './Todo.css'; // Import custom CSS for additional styling

const Todo = () => {
  const [taskInput, setTaskInput] = useState('');
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch(
        addTask({
          id: Date.now(), // simple unique id
          text: taskInput,
          completed: false,
        })
      );
      setTaskInput('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleUpdate = (id) => {
    const newText = prompt('Update task text:');
    if (newText) {
      dispatch(updateTask({ id, text: newText }));
    }
  };

  return (
    <div className="container mt-5 pt-5 todo-container">
      <h2 className="todo-title">To‑Do List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="form-control todo-input"
        />
        <button onClick={handleAddTask} className="btn btn-primary todo-add-btn">
          Add Task
        </button>
      </div>
      <div className="btn-group mb-4">
        <button onClick={() => dispatch(setFilter('all'))} className={`btn btn-outline-secondary ${filter === 'all' ? 'active' : ''}`}>
          All
        </button>
        <button onClick={() => dispatch(setFilter('completed'))} className={`btn btn-outline-secondary ${filter === 'completed' ? 'active' : ''}`}>
          Completed
        </button>
        <button onClick={() => dispatch(setFilter('pending'))} className={`btn btn-outline-secondary ${filter === 'pending' ? 'active' : ''}`}>
          Pending
        </button>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center todo-item">
            <span className={task.completed ? 'completed-task' : ''}>
              {task.text}
            </span>
            <div>
              <button onClick={() => handleToggle(task.id)} className="btn btn-sm btn-success me-2">
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleUpdate(task.id)} className="btn btn-sm btn-info me-2">
                Update
              </button>
              <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
