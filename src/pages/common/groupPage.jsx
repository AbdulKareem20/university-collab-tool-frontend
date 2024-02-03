import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const TeamManagementPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  

  const addStudent = () => {
    if (newStudentEmail.trim() === '') {
      alert('Please enter a valid email.');
      return;
    }

    if (students.some(student => student.email === newStudentEmail)) {
      alert('This email is already in the list.');
      return;
    }

    // Notify the added student via email
    notifyStudentByEmail(newStudentEmail);

    setStudents([...students, { email: newStudentEmail }]);
    setNewStudentEmail('');
  };

  const notifyStudentByEmail = (email) => {
    const templateParams = {
      to_email: email,
      subject: 'You have been added to the team',
      message: 'You have been added to the team by the group leader.',
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then(response => {
        console.log('Email sent successfully:', response);
      })
      .catch(error => {
        console.error('Email sending failed:', error);
      });
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    // For simplicity, let's assume the sender is always the group leader.
    const sender = 'Group Leader';

    setMessages([...messages, { sender, content: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Team Management Page</h1>

      {/* Add Student Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Add Students</h2>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter student's email"
            className="border p-2 mr-2 w-64"
            value={newStudentEmail}
            onChange={(e) => setNewStudentEmail(e.target.value)}
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={addStudent}>Add Student</button>
        </div>
      </div>

      {/* Student List */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Student List</h2>
        <ul className="list-disc pl-4">
          {students.map((student, index) => (
            <li key={index}>{student.email}</li>
          ))}
        </ul>
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
          <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default TeamManagementPage;
