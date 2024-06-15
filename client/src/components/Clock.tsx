// src/Clock.js
import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="flex justify-center pt-[2rem] text-[1.25rem] w-auto h-auto">
            <div className="relative inline-block">
                <span>{time.toLocaleTimeString()}</span>
                <div className="absolute bottom-[-10px] -left-2 -right-2 border-t-2 border-black transform translate-x-[0%] scale-x-110"></div>
            </div>
        </div>
    );
};

export default Clock;
