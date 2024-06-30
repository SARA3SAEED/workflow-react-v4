import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imglogo from '../assets/TaskFlow-logo.png';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-teal-600 bg-opacity-10 py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-32">
          <Link to="/">
            <img src={imglogo} alt="TaskFlow logo" />
          </Link>
        </div>

       

        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex gap-4">
            <Link to="/login" className="btn font-semibold py-2 px-4 rounded transition-colors duration-300 hover:text-teal-600 w-[80px]">Login</Link>
            <Link className="btn bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-700 bg-opacity-70" to="/signup">Sign up</Link>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav>
          <ul className="flex flex-col mt-4 space-y-2">
            <li><Link to="/login" className="text-sm font-semibold transition-colors duration-300 hover:text-teal-600">Login</Link></li>
            <li><Link className="text-sm font-semibold transition-colors duration-300 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700" to="/signup">Sign up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
