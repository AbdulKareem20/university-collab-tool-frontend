// TaskManagementPage.jsx
import React, { useState } from 'react';
import Navbar from '../common/navbar';

const TaskManagementPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [assigneeEmail, setAssigneeEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    setTasks([...tasks, { title: newTask, assignedTo: null }]);
    setNewTask('');
  };

  const assignTask = (index, assignee) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].assignedTo = assignee;
    setTasks(updatedTasks);
  };

  const assignTaskByEmail = () => {
    if (!assigneeEmail.trim()) {
      alert('Please enter an email to assign the task.');
      return;
    }

    const existingTaskIndex = tasks.findIndex(task => task.assignedTo === assigneeEmail);

    if (existingTaskIndex !== -1) {
      alert('Task already assigned to this email.');
      return;
    }

    const unassignedTaskIndex = tasks.findIndex(task => task.assignedTo === null);

    if (unassignedTaskIndex === -1) {
      alert('No tasks available for assignment.');
      return;
    }

    assignTask(unassignedTaskIndex, assigneeEmail);
    setAssigneeEmail('');
  };

  const updateTask = (index, newTitle) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTitle;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    const sender = 'HOD'; // Assuming messages are sent by the HOD
    setMessages([...messages, { sender, content: newMessage }]);
    setNewMessage('');
  };

  // Summary calculations
  const totalTasks = tasks.length;
  const assignedTasks = tasks.filter(task => task.assignedTo !== null).length;
  const progress = (assignedTasks / totalTasks) * 100;

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 m-4">
        <h2 className="text-3xl font-bold mb-4">Task Management Page</h2>

        {/* Add Task Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Add Task</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter task description"
              className="border p-2 mr-2 w-64"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>

        {/* Task List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Task List</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Task</th>
                <th className="py-2 px-4 bg-gray-200">Assigned To</th>
                <th className="py-2 px-4 bg-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="mb-2">
                  <td className="border py-2 px-4">{task.title}</td>
                  <td className="border py-2 px-4">
                    {task.assignedTo ? task.assignedTo : 'Unassigned'}
                  </td>
                  <td className="border py-2 px-4">
                    <button
                      className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                      onClick={() => assignTask(index, 'User1')}
                    >
                      Assign User1
                    </button>
                    <button
                      className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                      onClick={() => assignTask(index, 'User2')}
                    >
                      Assign User2
                    </button>
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                      onClick={() => updateTask(index, prompt('Enter new task title:'))}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assign Task by Email Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Assign Task by Email</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter assignee's email"
              className="border p-2 mr-2 w-64"
              value={assigneeEmail}
              onChange={(e) => setAssigneeEmail(e.target.value)}
            />
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={assignTaskByEmail}
            >
              Assign Task
            </button>
          </div>
        </div>

        {/* Messaging Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Messaging</h2>
          <div className="mb-4">
            <ul className="list-disc pl-4">
              {messages.map((message, index) => (
                <li key={index} className="mb-2">
                  <strong>{message.sender}:</strong> {message.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message"
              className="border p-2 mr-2 flex-grow"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-lg font-bold mb-2">Task Progress</h4>
            <div className="flex items-center mb-4">
              <div className="w-2/3 mr-4">
                <div className="bg-gray-200 h-4 rounded-full">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <div className="w-1/3 text-right">
                <span className="font-bold text-green-500">{progress.toFixed(2)}%</span> completed
              </div>
            </div>
            <p>Total Tasks: {totalTasks}</p>
            <p>Assigned Tasks: {assignedTasks}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagementPage;
