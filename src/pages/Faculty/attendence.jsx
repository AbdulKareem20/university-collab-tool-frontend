// OBEAttendancePage.js
import React, { useState } from 'react';

const TeacherAttendancePage  = () => {
  const [students, setStudents] = useState(Array.from({ length: 47 }, (_, index) => ({
    id: index + 1,
    rollNumber: `00${index + 1}`,
    name: `Student ${index + 1}`,
    attendance: [],
  })));

  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const markAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, attendance: [...student.attendance, selectedDate] }
        : student
    );

    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    const overallRecord = students.map((student) => ({
      rollNumber: student.rollNumber,
      name: student.name,
      attendance: student.attendance,
    }));

    setAttendanceRecords(overallRecord);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">OBE Attendance System</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Date:
        </label>
        <input
          type="date"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {students.map((student) => (
          <div
            key={student.id}
            className={`m-2 p-4 cursor-pointer ${
              student.attendance.includes(selectedDate) ? 'bg-green-300' : 'bg-red-300'
            }`}
            onClick={() => markAttendance(student.id)}
          >
            {`${student.rollNumber} - ${student.name}`}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Overall Attendance Record</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Roll Number</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Attendance Dates</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{record.rollNumber}</td>
                <td className="py-2 px-4 border-b">{record.name}</td>
                <td className="py-2 px-4 border-b">{record.attendance.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherAttendancePage ;
