import React, { useState } from 'react';

const AssignmentPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [assignmentId, setAssignmentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [submission, setSubmission] = useState('');

  const handleFileDownload = (fileName) => {
    // Placeholder function for file download
    alert(`Downloading file: ${fileName}`);
  };

  const handleAddAssignment = () => {
    if (!assignmentId || !courseId || !title || !description || !dueDate || !submission) {
      alert('Please provide all required information.');
      return;
    }

    const newAssignment = {
      assignmentId,
      courseId,
      title,
      description,
      dueDate,
      submission,
    };

    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);

    // Clear form fields after adding assignment
    setAssignmentId('');
    setCourseId('');
    setTitle('');
    setDescription('');
    setDueDate('');
    setSubmission('');
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Teacher Assignment Management</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add Assignment</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Assignment ID:</label>
            <input
              type="number"
              value={assignmentId}
              onChange={(e) => setAssignmentId(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Course ID:</label>
            <input
              type="number"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Submission:</label>
            <input
              type="text"
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <button
          onClick={handleAddAssignment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Assignment
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4">Assignments List</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Assignment ID</th>
              <th className="py-2 px-4 bg-gray-200">Course ID</th>
              <th className="py-2 px-4 bg-gray-200">Title</th>
              <th className="py-2 px-4 bg-gray-200">Description</th>
              <th className="py-2 px-4 bg-gray-200">Due Date</th>
              <th className="py-2 px-4 bg-gray-200">Submission</th>
              <th className="py-2 px-4 bg-gray-200">Download</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className="mb-2">
                <td className="border py-2 px-4">{assignment.assignmentId}</td>
                <td className="border py-2 px-4">{assignment.courseId}</td>
                <td className="border py-2 px-4">{assignment.title}</td>
                <td className="border py-2 px-4">{assignment.description}</td>
                <td className="border py-2 px-4">{assignment.dueDate}</td>
                <td className="border py-2 px-4">{assignment.submission}</td>
                <td className="border py-2 px-4">
                  <button
                    onClick={() => handleFileDownload(`${assignment.title}_file.pdf`)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                  >
                    Download
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

export default AssignmentPage;
