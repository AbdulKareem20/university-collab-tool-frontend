import React from 'react';
import Navbar from '../common/navbar';
import {Link} from 'react-router-dom'

const HODDashboard = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Chairman's Dashboard</h1>
    </div>
    <div className="container mx-auto mt-8">
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded">
     <Link to='/assigncourse'>     <h2 className="text-2xl font-bold mb-2">Assign Course</h2></Link>
        
        </div>  

        <div className="bg-gray-200 p-4 rounded">
     <Link to='/addfaculty'>     <h2 className="text-2xl font-bold mb-2">Add Faculty Members</h2></Link>
        
        </div> 
        


        <div className="bg-gray-200 p-4 rounded">
       <Link to='/addstudent'>   <h2 className="text-2xl font-bold mb-2">Add Students</h2></Link>
         
        </div>
        <div className="bg-gray-200 p-4 rounded">
       <Link to='/addworkingstaff'>   <h2 className="text-2xl font-bold mb-2">Add Working Staff</h2> </Link>
          
        </div>

        <div className="bg-gray-200 p-4 rounded">
       <Link to='/timeTable'>   <h2 className="text-2xl font-bold mb-2">Time Table</h2> </Link>
          
        </div>

        <div className="bg-gray-200 p-4 rounded">
      <Link>    <h2 className="text-2xl font-bold mb-2">Course</h2> </Link>

        </div>

        <div className="bg-gray-200 p-4 rounded">
       <Link>   <h2 className="text-2xl font-bold mb-2">Attendance Tracking</h2> </Link>
          
        </div>

      </div>
      
    </div>
    <div className="bg-gray-200 p-4 m-3">
      <h1 className="text-2xl font-bold mb-4">Meetings</h1>
      
    </div>
    </>
  );
};

export default HODDashboard;