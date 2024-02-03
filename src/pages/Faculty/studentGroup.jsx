import React, { useState } from 'react';
import Navbar from '../common/navbar';

const TeacherGroupManagement = () => {
  const [groups, setGroups] = useState([]);
  const [formData, setFormData] = useState({ name: '', rollNumber: '' });
  const [editingGroup, setEditingGroup] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addStudentToGroup = () => {
    const student = { ...formData };
    const updatedGroups = [...groups];

    if (editingGroup !== null) {
      // If editing an existing group, update the student in the group
      updatedGroups[editingGroup.index].students[editingGroup.studentIndex] = student;
      setEditingGroup(null);
    } else {
      // If creating a new group, add the student to the last group or create a new group
      const lastGroup = updatedGroups.length > 0 ? updatedGroups[updatedGroups.length - 1] : null;

      if (lastGroup && lastGroup.students.length < 4) {
        lastGroup.students.push(student);
      } else {
        updatedGroups.push({ students: [student] });
      }
    }

    setGroups(updatedGroups);
    setFormData({ name: '', rollNumber: '' });
  };

  const editStudent = (groupIndex, studentIndex) => {
    const studentToEdit = groups[groupIndex].students[studentIndex];
    setEditingGroup({ index: groupIndex, studentIndex });
    setFormData({ name: studentToEdit.name, rollNumber: studentToEdit.rollNumber });
  };

  const deleteStudent = (groupIndex, studentIndex) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex].students.splice(studentIndex, 1);
    setGroups(updatedGroups);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">Teacher Group Management</h2>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4">Add Students to Groups</h3>

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
            <label className="block text-gray-700 text-sm font-bold mb-2">Roll Number:</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            onClick={addStudentToGroup}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={editingGroup === null && groups.length > 0 && groups[groups.length - 1].students.length === 4}
          >
            {editingGroup !== null ? 'Update Student' : 'Add Student'}
          </button>
        </div>

        {groups.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-4">Student Groups</h3>

            {groups.map((group, groupIndex) => (
              <div key={groupIndex} className="bg-white p-4 rounded shadow-md mb-4">
                <h4 className="text-lg font-bold mb-2">Group {groupIndex + 1}</h4>

                <ul>
                  {group.students.map((student, studentIndex) => (
                    <li key={studentIndex} className="flex items-center mb-2">
                      <span className="mr-2">{student.name} ({student.rollNumber})</span>
                      <button
                        onClick={() => editStudent(groupIndex, studentIndex)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteStudent(groupIndex, studentIndex)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TeacherGroupManagement;
