// src/App.js
import './App.css'; 
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QNA from './components/QNA'; 
import TimerPage from './components/TimerPage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Incdec from './components/Incdec';
import Todo from './components/Todo'; 

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<QNA />} /> 
          <Route path='/home' element={<QNA />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/timer' element={<TimerPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/Incdec' element={<Incdec />} />
          <Route path='/todo' element={<Todo />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
