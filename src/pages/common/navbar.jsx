import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between items-center w-[30%]">
          <div className="text-white font-bold text-xl">Your Logo</div>

          {/* Navigation Links */}

          <ul className="flex space-x-8">
            <li>
              <Link to="/home" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutpage" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
        <form action="">
          <input type="search" />
          <Link to="/register">
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
              Sign up
            </button>
          </Link>
          <Link to="/">
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-2 rounded">
              Login
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
