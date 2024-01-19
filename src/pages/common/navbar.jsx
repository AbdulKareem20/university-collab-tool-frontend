import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Your Logo</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/homepage" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/aboutpage" className="text-white hover:text-gray-300">About</Link>
          </li>
          
          
        </ul>
        <form action="">
          <input type="search" /> 
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">Sign up</button>
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-2 rounded">Login</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
