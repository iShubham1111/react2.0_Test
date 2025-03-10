import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [count, setCount] = useState(120); // Start at 120 seconds (2 minutes)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    if (count === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, count]);

  // Convert seconds to MM:SS format
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div className="text-center mt-5">
      <h1>
        {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </h1>
      <button className="btn btn-success me-2" onClick={() => setIsRunning(true)}>
        Start
      </button>
      <button className="btn btn-danger me-2" onClick={() => setIsRunning(false)}>
        Stop
      </button>
      <button className="btn btn-warning" onClick={() => { setCount(120); setIsRunning(false); }}>
        Reset
      </button>
    </div>
  );
};
