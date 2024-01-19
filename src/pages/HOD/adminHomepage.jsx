import React from 'react';
import { Link } from 'react-router-dom';
import calendarImage from '../../images/calnder.webp'; 
import dashboardImage from '../../images/dashboard.webp';
import teamImage from '../../images/team.jpg';
import Navbar from '../common/navbar';


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Software Engineering Department</h1>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-gray-300">
              Team
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="hover:text-gray-300">
              Calendar
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Collaborative Tool</h2>
        <p className="text-gray-700">
          Explore different sections using the navigation links above. You can manage projects,
          view team members, and keep track of important events on the calendar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Card image={dashboardImage} title="Dashboard" link="/dashboard" />
          {/* <Card image={projectsImage} title="Projects" link="/projects" /> */}
          <Card image={teamImage} title="Team" link="/team" />
          <Card image={calendarImage} title="Calendar" link="/calendar" />
        </div>
      </main>
    </div>
    </>
  );
};

const Card = ({ image, title, link }) => {
  return (
    <Link to={link} className="block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">Click to explore</p>
      </div>
    </Link>
    
  );
  
};


export default Home;
