// src/Timetable.js
import React from 'react';

const Techertable = () => {
  
  const timetableData = [
    { day: 'Monday', time: '9:00 AM - 10:30 AM', subject: 'SOFTWARE RE-ENGINEERING', room: 'Batch 20' },
    { day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'SOFTWARE CONSTRUCTION', room: 'Batch 21' },
    { day: 'Wednesday', time: '1:30 AM - 3:30 PM', subject: 'SOFTWARE RE-ENGINEERING', room: 'Batch 20' },
    { day: 'Thursday', time: '11:00 AM - 1:30 PM', subject: 'SOFTWATE CONSTRUCTION', room: 'Batch 21' },
    { day: 'Friday', time: '9:00 AM - 11:00: AM', subject: 'SOFTWATE CONSTRUCTION (LAB)', room: 'Batch 21' },
    // Add more dummy data as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Teacher Timetable</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Day</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Batch</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{entry.day}</td>
              <td className="py-2 px-4 border-b">{entry.time}</td>
              <td className="py-2 px-4 border-b">{entry.subject}</td>
              <td className="py-2 px-4 border-b">{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Techertable;
