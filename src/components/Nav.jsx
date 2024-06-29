import React from 'react';
import { Link } from 'react-router-dom';
import imglogo from '../assets/TaskFlow-logo.png';

export default function Nav() {
  return (
    <header className="bg-teal-600 bg-opacity-10 py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-24">
          <Link to="/">
            <img src={imglogo} alt="TaskFlow logo" />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-4">
            <li><Link to="/" className="text-sm font-semibold transition-colors duration-300 hover:text-teal-600">Home</Link></li>
            <li><Link to="/dashbord" className="text-sm font-semibold transition-colors duration-300 hover:text-teal-600">Dashbord</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <Link to="/login" className="btn font-semibold py-2 px-4 rounded transition-colors duration-300 hover:text-teal-600 w-[80px]">Login</Link>
            <Link className="btn bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-700 bg-opacity-70" to="/signup">Sign up</Link>
          </ul>
          <div className="menu-btn text-xl cursor-pointer">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
