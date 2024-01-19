import './App.css';
import React from 'react';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import StudentList from './pages/HOD/AddStudent'
import Dashboard from './pages/HOD/dashboard';
import Navbar from './pages/common/navbar';
import StaffList from './pages/HOD/addStaff';
import TeacherDashboard from './pages/Faculty/facultyDashboard';
import AssignmentReport from './pages/Faculty/chart';
import AttendanceTracker from './pages/Faculty/attendenceTracking';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HOD/adminHomepage';
import About from './pages/common/aboutpage';
import ContactForm from './pages/common/contactus';
import TeacherManagement from './pages/HOD/addFaculty';
import HODDashboard from './pages/HOD/hodMainDash';
import Timetable from './pages/HOD/timeTable';
import Course from './pages/Faculty/course';
import DepartmentCreationPage from './pages/HOD/createDepartment';
import Studentreport from './pages/Faculty/reports';
import MeetingScheduler from './pages/Faculty/meetings';



const router = createBrowserRouter([
  {path:'/login', element:<Login/>},
  {path:'/Register', element:<Register/>},
  {path:'/Studentlist', element:<StudentList/>},
  {path:'/Dashboard', element:<Dashboard/>},
  {path:'/Navbar', element:<Navbar/>},
  {path:'/Stafflist', element:<StaffList/>},
  {path:'/TeacherDashboard', element:<TeacherDashboard/>},
  {path:'/adminhomepage', element:<admin />},
  {path:'/aboutpage', element:<About />},
  {path:'/aboutpage/contactpage', element:<ContactForm />},
  {path:'/addfaculty', element:<TeacherManagement />},
  {path:'/maindashboard', element:<HODDashboard />},
  {path:'/dashboard/maindashboard', element:<HODDashboard/>},
  {path:'/timeTable', element:<Timetable/>},
  {path:'/addStudent', element:<StaffList/>},
 {path:'/', element:<Home/>},
 {path:'/course', element:<Course />},
 {path:'/createdepartment', element:<DepartmentCreationPage />},
 {path:'/reports', element:<Studentreport />},
 {path:'meeting', element:<MeetingScheduler />}
])


function App() {
  return (
    <>
    <RouterProvider router = {router}  />
    </>
  );
}

export default App;
