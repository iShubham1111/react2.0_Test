import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/home">
          react-text-2
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">QNA</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Fetch</Link>
            </li>
            <li className="nav-item">
              <Link to="/timer" className="nav-link">Timer</Link>
            </li>
            <li className="nav-item">
              <Link to="/Incdec" className="nav-link fw-bold">-/+</Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link">To‑Do</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
