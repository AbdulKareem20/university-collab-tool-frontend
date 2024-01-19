import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Software Engineering Department</h1>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/maindashboard" className="hover:text-gray-300">
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
      </main>
    </div>
  );
};

export default Home;
