import React, { useState } from 'react';

const Timetable = () => {
  const [newEntry, setNewEntry] = useState({ day: '', time: '', className: '' });
  const [timetableData, setTimetableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleAddEntry = () => {
    if (newEntry.day && newEntry.time && newEntry.className) {
      if (editIndex !== null) {
        
        const updatedTimetable = [...timetableData];
        updatedTimetable[editIndex] = newEntry;
        setTimetableData(updatedTimetable);
        setEditIndex(null);
      } else {
     
        setTimetableData([...timetableData, newEntry]);
      }
      setNewEntry({ day: '', time: '', className: '' });
    }
  };

  const handleEditEntry = (index) => {
    setNewEntry(timetableData[index]);
    setEditIndex(index);
  };

  const handleDeleteEntry = (index) => {
    const updatedTimetable = [...timetableData];
    updatedTimetable.splice(index, 1);
    setTimetableData(updatedTimetable);
    setEditIndex(null);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Class Timetable</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Add/Edit Entry</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            name="day"
            value={newEntry.day}
            onChange={handleInputChange}
            placeholder="Day"
            className="p-2 border border-gray-300"
          />
          <input
            type="text"
            name="time"
            value={newEntry.time}
            onChange={handleInputChange}
            placeholder="Time"
            className="p-2 border border-gray-300"
          />
          <input
            type="text"
            name="className"
            value={newEntry.className}
            onChange={handleInputChange}
            placeholder="Class Name"
            className="p-2 border border-gray-300"
          />
          <button onClick={handleAddEntry} className="p-2 bg-blue-500 text-white hover:bg-blue-600">
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>
      </div>

    
      <div>
        <h2 className="text-lg font-semibold mb-2">Timetable</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Class Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((entry, index) => (
              <tr key={index}>
                <td className="border p-2">{entry.day}</td>
                <td className="border p-2">{entry.time}</td>
                <td className="border p-2">{entry.className}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditEntry(index)}
                    className="bg-yellow-500 text-white hover:bg-yellow-600 px-2 py-1 mr-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEntry(index)}
                    className="bg-red-500 text-white hover:bg-red-600 px-2 py-1"
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

export default Timetable;
