// src/redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state for the to-do list
const initialState = {
  tasks: [],
  filter: 'all', // Options: 'all', 'completed', 'pending'
};

// Load persisted state from localStorage (if available)
const persistedState = localStorage.getItem('todoState')
  ? JSON.parse(localStorage.getItem('todoState'))
  : initialState;

// Create a slice for todos with reducers for common actions
const todoSlice = createSlice({
  name: 'todos',
  initialState: persistedState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions for use in components
export const { addTask, updateTask, deleteTask, toggleTask, setFilter } = todoSlice.actions;

// Configure the Redux store with our todos slice
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Subscribe to store updates to persist state in localStorage
store.subscribe(() => {
  localStorage.setItem('todoState', JSON.stringify(store.getState().todos));
});

export default store;
