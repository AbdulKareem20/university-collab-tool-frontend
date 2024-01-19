// src/StudentGradePage.js
import React, { useState } from 'react';

const Studentreport = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    id: null,
    name: '',
    rollNumber: '',
    midTermMarks: '',
    finalPaperMarks: '',
    sectionalMarks: '',
    totalMarks: '',
    grade: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const calculateTotalMarks = () => {
    const midTerm = parseFloat(student.midTermMarks) || 0;
    const finalPaper = parseFloat(student.finalPaperMarks) || 0;
    const sectional = parseFloat(student.sectionalMarks) || 0;

    const total = midTerm + finalPaper + sectional;

    setStudent((prevStudent) => ({
      ...prevStudent,
      totalMarks: total,
      grade: calculateGrade(total),
    }));
  };

  const calculateGrade = (total) => {
    if (total >= 90) {
      return 'A+';
    } else if (total >= 80) {
      return 'A';
    } else if (total >= 70) {
      return 'B';
    } else if (total >= 60) {
      return 'C';
    } else {
      return 'F';
    }
  };

  const handleAddStudent = () => {
    if (student.id === null) {
      // Add new student
      setStudents([...students, { ...student, id: Date.now() }]);
    } else {
      // Update existing student
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s.id === student.id ? { ...student } : s))
      );
    }

    // Clear the form
    setStudent({
      id: null,
      name: '',
      rollNumber: '',
      midTermMarks: '',
      finalPaperMarks: '',
      sectionalMarks: '',
      totalMarks: '',
      grade: '',
    });
  };

  const handleEditStudent = (selectedStudent) => {
    setStudent({ ...selectedStudent });
  };

  const handleDeleteStudent = (selectedStudent) => {
    setStudents((prevStudents) => prevStudents.filter((s) => s.id !== selectedStudent.id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Student Grade Calculator</h1>
        <p className="text-gray-600">Enter student details to calculate grades</p>
      </div>

      {/* Student Grade Form */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Student Name"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Roll Number"
            name="rollNumber"
            value={student.rollNumber}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Sectional Marks"
            name="sectionalMarks"
            value={student.sectionalMarks}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="number"
            placeholder="Mid-Term Marks"
            name="midTermMarks"
            value={student.midTermMarks}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="number"
            placeholder="Final Paper Marks"
            name="finalPaperMarks"
            value={student.finalPaperMarks}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            calculateTotalMarks();
            handleAddStudent();
          }}
        >
          {student.id === null ? 'Add Student' : 'Update Student'}
        </button>
      </div>

      {/* Student Table */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Roll Number</th>
              <th className="py-2 px-4 border-b">Sectional Marks</th>
              <th className="py-2 px-4 border-b">Mid-Term Marks</th>
              <th className="py-2 px-4 border-b">Final Paper Marks</th>
              <th className="py-2 px-4 border-b">Total Marks</th>
              <th className="py-2 px-4 border-b">Grade</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td className="py-2 px-4 border-b">{s.name}</td>
                <td className="py-2 px-4 border-b">{s.rollNumber}</td>
                <td className="py-2 px-4 border-b">{s.sectionalMarks}</td>
                <td className="py-2 px-4 border-b">{s.midTermMarks}</td>
                <td className="py-2 px-4 border-b">{s.finalPaperMarks}</td>
                <td className="py-2 px-4 border-b">{s.totalMarks }</td>
                <td className="py-2 px-4 border-b">{s.grade || ''}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => handleEditStudent(s)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteStudent(s)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentreport;
