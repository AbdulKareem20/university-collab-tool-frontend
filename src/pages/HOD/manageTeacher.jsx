import React, { useState } from 'react';
import Navbar from '../common/navbar';

const HodTeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    teacherId: '',
    course: '',
    batch: '',
    teacherName: '',
  });
  const [editingTeacher, setEditingTeacher] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addTeacher = () => {
    setTeachers((prevTeachers) => [
      ...prevTeachers,
      {
        ...formData,
        id: Date.now(),
      },
    ]);
    setFormData({ teacherId: '', course: '', batch: '', teacherName: '' });
  };

  const editTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setFormData({
      teacherId: teacher.teacherId,
      course: teacher.course,
      batch: teacher.batch,
      teacherName: teacher.teacherName,
    });
  };

  const updateTeacher = () => {
    setTeachers((prevTeachers) =>
      prevTeachers.map((teacher) =>
        teacher.id === editingTeacher.id ? { ...teacher, ...formData } : teacher
      )
    );
    setFormData({ teacherId: '', course: '', batch: '', teacherName: '' });
    setEditingTeacher(null);
  };

  const deleteTeacher = (teacher) => {
    setTeachers((prevTeachers) => prevTeachers.filter((t) => t.id !== teacher.id));
    setEditingTeacher(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">HOD Teacher Management</h2>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4">
            {editingTeacher ? 'Update Teacher' : 'Add New Teacher'}
          </h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Teacher ID:</label>
            <input
              type="text"
              name="teacherId"
              value={formData.teacherId}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Batch:</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Teacher Name:</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          {editingTeacher ? (
            <button
              onClick={updateTeacher}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Teacher
            </button>
          ) : (
            <button
              onClick={addTeacher}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Teacher
            </button>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-4">Teachers List</h3>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Teacher ID</th>
                <th className="py-2 px-4 bg-gray-200">Course</th>
                <th className="py-2 px-4 bg-gray-200">Batch</th>
                <th className="py-2 px-4 bg-gray-200">Teacher Name</th>
                <th className="py-2 px-4 bg-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="mb-2">
                  <td className="border py-2 px-4">{teacher.teacherId}</td>
                  <td className="border py-2 px-4">{teacher.course}</td>
                  <td className="border py-2 px-4">{teacher.batch}</td>
                  <td className="border py-2 px-4">{teacher.teacherName}</td>
                  <td className="border py-2 px-4">
                    <button
                      onClick={() => editTeacher(teacher)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTeacher(teacher)}
                      className="ml-2 text-red-500 hover:text-red-700"
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
    </>
  );
};

export default HodTeacherManagement;
