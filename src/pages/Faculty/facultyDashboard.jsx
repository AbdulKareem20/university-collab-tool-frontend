import React from 'react';
import Navbar from '../common/navbar';
import AssignmentReport from './chart';

const TeacherDashboard = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher's Dashboard</h1>
    </div>
    <div className="container mx-auto mt-8">
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Student Progress Tracking</h2>
          {/* Add logic to display student information */}
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Assignment Management</h2>
          {/* Add logic to display teacher information */}
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Communication Tools</h2>
          {/* Add logic to display student information */}
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Time Table</h2>
          {/* Add logic to display teacher information */}
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Course</h2>
          {/* Add logic to display student information */}
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Attendance Tracking</h2>
          {/* Add logic to display teacher information */}
        </div>

      </div>
      
    </div>
    <div className="bg-gray-200 p-4 m-3">
      <h1 className="text-2xl font-bold mb-4">Reports!</h1>
      {/* <AssignmentReport/> */}
    </div>
    </>
  );
};

export default TeacherDashboard;