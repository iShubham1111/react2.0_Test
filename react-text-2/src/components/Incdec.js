import React, { useState } from 'react';

function Incdec() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5">
      <div className="card text-center shadow">
        <div className="card-body">
          <h1 className="card-title">Add and Minus Short Way</h1>
          <h2 className="card-subtitle mb-3">Count: {count}</h2>
          <div className="d-flex justify-content-center">
            <button 
              onClick={() => setCount(count - 1)} 
              className="btn btn-danger mx-2"
            >
              -
            </button>
            <button 
              onClick={() => setCount(count + 1)} 
              className="btn btn-success mx-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incdec;
