import './App.css';
import React from 'react';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import StudentList from './pages/HOD/AddStudent'
import Dashboard from './pages/HOD/dashboard';
import Navbar from './pages/common/navbar';
import StaffList from './pages/HOD/addStaff';
import TeacherDashboard from './pages/Faculty/facultyDashboard';
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
import HodTeacherManagement from './pages/HOD/manageTeacher';
import HodAttendancePage from './pages/HOD/attendencetracke';
import TeacherAttendancePage from './pages/Faculty/attendence';
import HodPieChartPage from './pages/HOD/chart';
import Sidebar from './pages/common/sidebar';
import TeacherGroupManagement from './pages/Faculty/studentGroup';
import TeacherAssignment from './pages/Faculty/studentGroup';
import AssignmentPage from './pages/Faculty/assignment';
import ContactPage from './pages/common/mainPage';
import TeamManagementPage from './pages/common/groupPage';
import HodPage from './pages/HOD/assignPage';
import TeacherChat from './pages/HOD/teachersChat';
import TaskManagementPage from './pages/HOD/teachersChat';
import Techertable from './pages/Faculty/timetable';
import Messaging from './pages/Faculty/facultyChat';
import StudentDashboard from './pages/student/studentDashboard';
import ChatPage from './pages/student/chatpage';
import StudentTimetable from './pages/student/studenttimetable';
import Chat from './pages/Faculty/facultyChat';



const router = createBrowserRouter([
  {path:'/login', element:<Login/>},
  {path:'/Register', element:<Register/>},
  {path:'/addstudent', element:<StudentList/>},
  {path:'/Dashboard', element:<Dashboard/>},
  {path:'/Navbar', element:<Navbar/>},
   {path:'/sidebar', element:<Sidebar/>},
  {path:'/Stafflist', element:<StaffList/>},
  {path:'/TeacherDashboard', element:<TeacherDashboard/>},
  {path:'/adminhomepage', element:<admin/>},
  {path:'/aboutpage', element:<About />},
  {path:'/aboutpage/contactpage', element:<ContactForm />},
  {path:'/assigncourse', element:<TeacherManagement />},
  {path:'/maindashboard', element:<HODDashboard />},
  {path:'/dashboard/maindashboard', element:<HODDashboard/>},
  {path:'/timeTable', element:<Timetable/>},
  {path:'/addworkingstaff', element:<StaffList/>},
 {path:'/', element:<Home/>},
 {path:'/course', element:<Course />},
 {path:'attendencetracker', element:<HodAttendancePage/>},
 {path:'/createdepartment', element:<DepartmentCreationPage />},
 {path:'/reports', element:<Studentreport />},
 {path:'/meeting', element:<MeetingScheduler />},
 {path:'/home', element:<Home />},
 {path:'/addfaculty', element:<HodTeacherManagement/>},
 {path:'/addattenence', element:<TeacherAttendancePage />},
 {path:'/chart', element:<HodPieChartPage/>},
 {path:'/studentgroup', element:<TeacherGroupManagement/>},
 {path:'/assignment', element:<AssignmentPage />},
 {path:'/grouping', element:<TeamManagementPage />},
 {path:'/hodassign', element:< HodPage />},
 {path:'/teacherchat', element:<TaskManagementPage />},
 {path:'/teacherstimetable', element:<Techertable/>},
 {path:'/facultychat', element:< Chat/>},
 {path:'/studentdashboard', element:<StudentDashboard/>},
 {path:'/studentbot', element:< ChatPage/>},
 {path:'/studenttimetable', element:< StudentTimetable/>},

 
])


function App() {
  return (
    <>
    <RouterProvider router = {router}  />
               
    </>
  );
}

export default App;
