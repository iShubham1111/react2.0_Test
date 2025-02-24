import './App.css'; 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QNA from './components/QNA'; 
import TimerPage from './components/TimerPage';
import Form from './components/Form';
import CounterPage from './components/CounterPage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<QNA />} /> 
        <Route path='/home' element={<QNA />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/timer' element={<TimerPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
