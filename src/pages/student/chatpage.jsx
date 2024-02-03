// ChatPage.js

import React, { useState } from 'react';

const ChatPage = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [groupMessages, setGroupMessages] = useState([]);
  const [message, setMessage] = useState('');

  const addFriend = (email) => {
    // Add friend logic (e.g., send an invitation, check if the email is valid)
    // For simplicity, just add the email to the list of friends
    setFriends((prevFriends) => [...prevFriends, email]);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // If a friend is selected, send a private message
      if (selectedFriend) {
        setSelectedFriend((prevSelectedFriend) => {
          const newMessages = [
            ...(prevSelectedFriend.messages || []),
            { sender: 'You', text: message },
          ];
          return { ...prevSelectedFriend, messages: newMessages };
        });
      } else {
        // If no friend is selected, send a group message
        setGroupMessages((prevGroupMessages) => [
          ...prevGroupMessages,
          { sender: 'You', text: message },
        ]);
      }

      setMessage('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Student Chat</h1>

      <div className="flex">
        <div className="w-1/4 mr-4">
          <h2 className="text-xl font-bold mb-2">Friends</h2>
          {friends.map((friend, index) => (
            <div
              key={index}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => setSelectedFriend({ friend })}
            >
              {friend}
            </div>
          ))}
        </div>

        <div className="w-3/4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add Friend by Email:
            </label>
            <div className="flex">
              <input
                type="email"
                className="shadow appearance-none border rounded w-2/3 py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => addFriend(message)}
              >
                Add
              </button>
            </div>
          </div>

          {selectedFriend && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">{selectedFriend.friend}</h2>
              <div className="border p-4 h-40 overflow-y-auto mb-4">
                {selectedFriend.messages &&
                  selectedFriend.messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                      <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Group Chat Section */}
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Group Chat</h2>
            <div className="border p-4 h-40 overflow-y-auto mb-4">
              {groupMessages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex">
            <input
              type="text"
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
