import React, { useState } from 'react';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({ name: '', subject: '' });
  const [editingTeacher, setEditingTeacher] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addTeacher = () => {
    setTeachers((prevTeachers) => [...prevTeachers, { ...formData, id: Date.now() }]);
    setFormData({ name: '', subject: '' });
  };

  const editTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setFormData({ name: teacher.name, subject: teacher.subject });
  };

  const updateTeacher = () => {
    setTeachers((prevTeachers) =>
      prevTeachers.map((teacher) =>
        teacher.id === editingTeacher.id ? { ...teacher, ...formData } : teacher
      )
    );
    setFormData({ name: '', subject: '' });
    setEditingTeacher(null);
  };

  const deleteTeacher = (teacher) => {
    setTeachers((prevTeachers) => prevTeachers.filter((t) => t.id !== teacher.id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Teacher Management</h2>

      <div className="grid grid-cols-3 gap-4">
       
        <div className="col-span-2 bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4">
            {editingTeacher ? 'Update Teacher' : 'Add New Teacher'}
          </h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
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

     
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Teachers List</h3>
          <ul>
            {teachers.map((teacher) => (
              <li key={teacher.id} className="mb-2">
                <span className="mr-2">{teacher.name}</span>
                <span className="text-gray-500">{teacher.subject}</span>
                <button
                  onClick={() => editTeacher(teacher)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTeacher(teacher)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherManagement;
