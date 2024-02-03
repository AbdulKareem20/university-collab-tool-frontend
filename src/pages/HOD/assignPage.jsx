import React, { useState } from 'react';
import Navbar from '../common/navbar';

const HodPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacherEmail, setNewTeacherEmail] = useState('');
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  const addTeacher = () => {
    if (newTeacherEmail.trim() === '') {
      alert('Please enter a valid email.');
      return;
    }

    if (teachers.some((teacher) => teacher.email === newTeacherEmail)) {
      alert('This email is already in the list.');
      return;
    }

    setTeachers([...teachers, { email: newTeacherEmail, tasks: [], progress: 0 }]);
    setNewTeacherEmail('');
  };

  const assignTask = (teacherIndex, task) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[teacherIndex].tasks.push(task);
    setTeachers(updatedTeachers);
  };

  const updateProgress = (teacherIndex, newProgress) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[teacherIndex].progress = newProgress;
    setTeachers(updatedTeachers);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">HOD Dashboard</h2>

        <div className="bg-white p-4 rounded shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Add Teachers</h3>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter teacher's email"
              className="border p-2 mr-2 w-64"
              value={newTeacherEmail}
              onChange={(e) => setNewTeacherEmail(e.target.value)}
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={addTeacher}>
              Add Teacher
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Assign Tasks</h3>

          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Teacher Email</th>
                <th className="py-2 px-4 bg-gray-200">Tasks</th>
                <th className="py-2 px-4 bg-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="mb-2">
                  <td className="border py-2 px-4">{teacher.email}</td>
                  <td className="border py-2 px-4">
                    <ul>
                      {teacher.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border py-2 px-4">
                    <button
                      onClick={() => assignTask(index, prompt('Enter the task:'))}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                    >
                      Assign Task
                    </button>
                    <button
                      onClick={() =>
                        updateProgress(
                          index,
                          parseInt(prompt('Enter the new progress percentage:'), 10)
                        )
                      }
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >
                      Update Progress
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Progress Summary</h3>

          <div className="flex items-center mb-4">
            <div className="w-2/3 mr-4">
              <div className="bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="w-1/3 text-right">
              <span className="font-bold text-green-500">{progress.toFixed(2)}%</span> completed
            </div>
          </div>

          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Teacher Email</th>
                <th className="py-2 px-4 bg-gray-200">Progress</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="mb-2">
                  <td className="border py-2 px-4">{teacher.email}</td>
                  <td className="border py-2 px-4">{teacher.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HodPage;
