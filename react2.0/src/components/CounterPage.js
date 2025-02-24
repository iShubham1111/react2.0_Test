import React, { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Counter Page</h1>
      <div className="card p-4 d-inline-block">
        <h2 className="mb-3">Count: {count}</h2>
        <button className="btn btn-danger me-2" onClick={decrement}>-</button>
        <button className="btn btn-success ms-2" onClick={increment}>+</button>
      </div>
    </div>
  );
}
