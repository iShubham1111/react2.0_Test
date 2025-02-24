import React, { useState, useEffect } from 'react';

export const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <div className="text-center mt-5">
            <h1>I have rendered {count} times!</h1>
            <button className="btn btn-success me-2" onClick={() => setIsRunning(true)}>Start</button>
            <button className="btn btn-danger" onClick={() => setIsRunning(false)}>Stop</button>
        </div>
    );
};
