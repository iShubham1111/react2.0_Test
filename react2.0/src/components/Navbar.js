import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/home">Reac2.0 1st-Test</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <Link to="/home" className="nav-link">QNA</Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link">Form</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
           
            <li className="nav-item">
              <Link to="/timer" className="nav-link">Timer</Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-link fw-bold">Counter(+,-)</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}