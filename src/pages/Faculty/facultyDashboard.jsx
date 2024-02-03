import React from 'react';
import Navbar from '../common/navbar';
import { Link } from 'react-router-dom';
import Sidebar from '../common/sidebar';

const TeacherDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white h-screen w-1/5 fixed">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-4 bg-blue-500">
          <h1 className="text-2xl font-bold mb-4 text-white">Teacher's Dashboard</h1>
          <div className="bg-gray-200 p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="bg-yellow-200 p-4 rounded hover:bg-yellow-300">
                <Link to="/studentprogress">
                  <h2 className="text-2xl font-bold mb-2">Student Progress Tracking</h2>
                </Link>
                {/* Add logic to display student information */}
              </div>

              <div className="bg-green-200 p-4 rounded hover:bg-green-300">
                <Link to="/assignment">
                  <h2 className="text-2xl font-bold mb-2">Assignment Management</h2>
                </Link>
                {/* Add logic to display teacher information */}
              </div>

              <div className="bg-blue-200 p-4 rounded hover:bg-blue-300">
                <Link to="/facultychat">
                  <h2 className="text-2xl font-bold mb-2">Communication Tools</h2>
                </Link>
                {/* Add logic to display student information */}
              </div>

              <div className="bg-purple-200 p-4 rounded hover:bg-purple-300">
                <Link to="/teacherstimetable">
                  <h2 className="text-2xl font-bold mb-2">Time Table</h2>
                </Link>
              </div>

              <div className="bg-pink-200 p-4 rounded hover:bg-pink-300">
                <Link to="/course">
                  <h2 className="text-2xl font-bold mb-2">Course</h2>
                </Link>
                {/* Add logic to display student information */}
              </div>

              <div className="bg-orange-200 p-4 rounded hover:bg-orange-300">
                <Link to="/addattendance">
                  <h2 className="text-2xl font-bold mb-2">Attendance Tracking</h2>
                </Link>
                {/* Add logic to display teacher information */}
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 my-4">
            <Link to="/reports">
              <h1 className="text-2xl font-bold mb-4">Reports!</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
