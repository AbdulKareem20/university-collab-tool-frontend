import React, { useState } from "react";
import Navbar from "../common/navbar";

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Abdul Kareem", semester: "7th", rollNumber: "20sw18" },
    { id: 2, name: "Mubashir Najam", semester: "7th", rollNumber: "20sw20" },
    { id: 3, name: "Malika Rajpu", semester: "7th", rollNumber: "20sw33" },
   
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    semester: "",
    rollNumber: "",
  });

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const handleInputChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = () => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setNewStudent({ name: "", semester: "", rollNumber: "" });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleUpdateStudent = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === selectedStudentId ? newStudent : student
      )
    );
    setNewStudent({ name: "", semester: "", rollNumber: "" });
    setUpdateModalOpen(false);
  };

  const openUpdateModal = (id, name, semester, rollNumber) => {
    setUpdateModalOpen(true);
    setSelectedStudentId(id);
    setNewStudent({ name, semester, rollNumber });
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedStudentId(null);
    setNewStudent({ name: "", semester: "", rollNumber: "" });
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Student List</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Semester:</label>
          <input
            type="text"
            name="semester"
            value={newStudent.semester}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={newStudent.rollNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
        >
          Add Student
        </button>
        <table className="min-w-full mt-8 bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Semester</th>
              <th className="py-2 px-4 border-b">Roll Number</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.semester}</td>
                <td className="py-2 px-4 border-b">{student.rollNumber}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() =>
                      openUpdateModal(student.id, student.name, student.semester, student.rollNumber)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Update Student</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Semester:</label>
              <input
                type="text"
                name="semester"
                value={newStudent.semester}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Roll Number:</label>
              <input
                type="text"
                name="rollNumber"
                value={newStudent.rollNumber}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleUpdateStudent}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={closeUpdateModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default StudentList;
