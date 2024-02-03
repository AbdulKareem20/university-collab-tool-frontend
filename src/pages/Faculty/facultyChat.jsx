// src/Chat.js
import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [usersOnline] = useState(['User1', 'User2', 'User3']); // Dummy users online

  useEffect(() => {
    // // Simulate real-time updates
    // const interval = setInterval(() => {
    //   setMessages((prevMessages) => [
    //     ...prevMessages,
    //     { text: 'New message', sender: 'Teacher', timestamp: Date.now() },
    //   ]);
    // }, 5000); // Add a new message every 5 seconds

    // return () => clearInterval(interval);
  }, []); // Run once on component mount

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: 'Teacher', timestamp: Date.now() },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-none w-1/4 bg-white border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Users Online</h2>
          <ul>
            {usersOnline.map((user, index) => (
              <li key={index} className="text-blue-500">
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-none h-16 bg-white border-b p-4">
          <h1 className="text-lg font-semibold">Teacher Chat</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <span className="text-gray-500 text-sm">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>{' '}
              <span className="font-semibold">{message.sender}:</span> {message.text}
            </div>
          ))}
        </div>
        <div className="flex-none h-16 bg-white border-t p-4">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 border p-2 rounded-l-md"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
