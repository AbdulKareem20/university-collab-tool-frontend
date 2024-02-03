import React, { useState } from 'react';
import Navbar from '../common/navbar';

const HodAttendancePage = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [overallAttendance, setOverallAttendance] = useState(null);

  const handleSubjectAdd = () => {
    // Add the selected subject manually (you can replace this with your logic to add subjects)
    setSubjects([...subjects, selectedSubject]);
  };

  const handleOverallAttendance = () => {
    // Calculate overall attendance manually (you can replace this with your actual logic)
    const overallAttendancePercentage = Math.floor(Math.random() * 100); // Random overall attendance percentage
    setOverallAttendance({ subject: selectedSubject, overallAttendance: overallAttendancePercentage });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">HOD Attendance Page</h2>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4">Enter Subject Name</h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
            <input
              type="text"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            onClick={handleSubjectAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Subject
          </button>

          {subjects.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-4">Overall Attendance</h3>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200">Subject</th>
                    <th className="py-2 px-4 bg-gray-200">Overall Attendance Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject} className="mb-2">
                      <td className="border py-2 px-4">{subject}</td>
                      <td className="border py-2 px-4">
                        <button
                          onClick={() => {
                            setSelectedSubject(subject);
                            handleOverallAttendance();
                          }}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                        >
                          Show Attendance
                        </button>
                        {overallAttendance && overallAttendance.subject === subject && (
                          <span className="ml-2">
                            {overallAttendance.overallAttendance}%
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HodAttendancePage;
