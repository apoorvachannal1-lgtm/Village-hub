import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [timeZone, setTimeZone] = useState('UTC');
    const [timeFormat, setTimeFormat] = useState('12'); // 12 or 24
    const [currentTime, setCurrentTime] = useState('');

    const updateClock = () => {
        const time = new Date().toLocaleString('en-US', {
            timeZone,
            hour12: timeFormat === '12',
        });
        setCurrentTime(time);
    };

    useEffect(() => {
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, [timeZone, timeFormat]);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Current Time</h1>
            <p className="text-lg mt-2">{currentTime}</p>
            <div className="mt-4">
                <label className="mr-2">Select Time Zone:</label>
                <select className="p-2 rounded" onChange={(e) => setTimeZone(e.target.value)}>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">New York</option>
                    <option value="Europe/London">London</option>
                    <option value="Asia/Kolkata">Kolkata</option>
                    <option value="Australia/Sydney">Sydney</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                </select>
            </div>
            <div className="mt-4">
                <label className="mr-2">Time Format:</label>
                <button className="p-2 rounded bg-blue-500 text-white" onClick={() => setTimeFormat('12')}>12-Hour</button>
                <button className="p-2 rounded bg-blue-500 text-white ml-2" onClick={() => setTimeFormat('24')}>24-Hour</button>
            </div>
        </div>
    );
};

export default Clock;