// StudentTimetable.js

import React, { useState } from 'react';

const StudentTimetable = () => {
  const [timetableData, setTimetableData] = useState([
    { day: 'Monday', time: '9:00 AM - 10:00 AM', className: 'class' },
    { day: 'Tuesday', time: '11:00 AM - 2:00 PM', className: 'Lab' },
    { day: 'Tuesday', time: '1:00 PM - 2:00 PM', className: 'Lab' },
    { day: 'Wednesday', time: '9:00 AM - 11:00 AM', className: 'Class' },
    { day: 'Thursday', time: '9:00 AM - 11:00 AM', className: 'Class' },
    { day: 'Friday', time: '9:00 AM - 11:00 AM', className: 'Class' },
  ]);

  return (
    <div className="mt-8 ">
      <h2 className="text-xl font-bold mb-4">Software Engineering Student Timetable</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Day</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Class Type</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
              <td className="border px-4 py-2">{entry.day}</td>
              <td className="border px-4 py-2">{entry.time}</td>
              <td className="border px-4 py-2">{entry.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTimetable;
