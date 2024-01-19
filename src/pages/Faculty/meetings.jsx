import React, { useState } from 'react';

const MeetingScheduler = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    date: '',
    time: '',
  });

  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingMeetingId, setEditingMeetingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleScheduleMeeting = () => {
    const newMeeting = {
      id: Date.now(),
      ...meetingDetails,
    };

    if (isEditing) {
      
      setScheduledMeetings((prevMeetings) =>
        prevMeetings.map((meeting) =>
          meeting.id === editingMeetingId ? { ...newMeeting } : meeting
        )
      );

      
      setIsEditing(false);
      setEditingMeetingId(null);
    } else {
      
      setScheduledMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
    }


    setMeetingDetails({
      title: '',
      date: '',
      time: '',
    });
  };

  const handleEditMeeting = (meeting) => {
    setIsEditing(true);
    setEditingMeetingId(meeting.id);
    setMeetingDetails({
      title: meeting.title,
      date: meeting.date,
      time: meeting.time,
    });
  };

  const handleDeleteMeeting = (meetingId) => {
    
    setScheduledMeetings((prevMeetings) =>
      prevMeetings.filter((meeting) => meeting.id !== meetingId)
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Meeting Scheduler</h1>
        <p className="text-gray-600">Schedule your upcoming meetings</p>
      </div>

      <div className="mb-8 w-full md:w-1/2">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Meeting Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter meeting title"
            value={meetingDetails.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 p-2 w-full border rounded-md"
            value={meetingDetails.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="mt-1 p-2 w-full border rounded-md"
            value={meetingDetails.time}
            onChange={handleInputChange}
          />
        </div>

        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isEditing ? 'bg-yellow-500 hover:bg-yellow-700' : ''
          }`}
          onClick={handleScheduleMeeting}
        >
          {isEditing ? 'Update Meeting' : 'Schedule Meeting'}
        </button>
      </div>

     
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Scheduled Meetings</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Meeting Title</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scheduledMeetings.map((meeting) => (
              <tr key={meeting.id}>
                <td className="py-2 px-4 border-b">{meeting.title}</td>
                <td className="py-2 px-4 border-b">{meeting.date}</td>
                <td className="py-2 px-4 border-b">{meeting.time}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => handleEditMeeting(meeting)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteMeeting(meeting.id)}
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
  );
};

export default MeetingScheduler;
