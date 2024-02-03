import React from 'react';
import Navbar from '../common/navbar';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="bg-indigo-600 p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Student's Dashboard</h1>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-500 p-4 rounded hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/studentprogress">
              <h2 className="text-2xl font-bold mb-2 text-white">course instructor</h2>
            </Link>
            {/* Add logic to display student information */}
          </div>

          <div className="bg-yellow-500 p-4 rounded hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/assignments">
              <h2 className="text-2xl font-bold mb-2 text-white">Assignments</h2>
            </Link>
            {/* Add logic to display student information */}
          </div>

          <div className="bg-green-500 p-4 rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/studentchat">
              <h2 className="text-2xl font-bold mb-2 text-white">Group Discussions</h2>
            </Link>
            {/* Add logic to display student information */}
          </div>

          <div className="bg-blue-500 p-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/studenttimetable">
              <h2 className="text-2xl font-bold mb-2 text-white">Time Table</h2>
            </Link>
          </div>

          <div className="bg-pink-500 p-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/courses">
              <h2 className="text-2xl font-bold mb-2 text-white">Courses</h2>
            </Link>
            {/* Add logic to display student information */}
          </div>
          <div className="bg-pink-500 p-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/courses">
              <h2 className="text-2xl font-bold mb-2 text-white">seminar</h2>
            </Link>
            {/* Add logic to display student information */}
          </div>

        
        </div>
      </div>
      
      
    </>
  );
};

export default StudentDashboard;
