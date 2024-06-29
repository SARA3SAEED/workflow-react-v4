import React from 'react';
import Nav from '../components/Nav';

export default function LoginPage() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto p-4">
        <div className="my-16 bg-white bg-opacity-90 rounded-3xl shadow-2xl relative overflow-hidden w-full lg:w-[768px] max-w-full min-h-[580px]">
          <div className="flex flex-col lg:flex-row">
          <div className="flex lg:h-[600px] h-[250px] flex-col lg:rounded-tl-3xl lg:rounded-bl-3xl  items-center justify-center p-2 w-full lg:w-1/2 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
              <h1 className="text-3xl p-5 font-bold">Welcome Back!</h1>
              <p className="text-lg leading-5 p-5 tracking-wide my-5 text-center">Enter your personal details to continue your work</p>
            </div>

            <div className="bg-white bg-opacity-90 flex flex-col items-center justify-center p-10 w-full lg:w-1/2">
              <h1 className="font-primary text-2xl font-medium">Login</h1>
              <input type="text" placeholder="Username" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <input type="password" placeholder="Password" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <button type="submit" className="btn bg-teal-600 bg-opacity-70 text-white mt-2 py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-800 hover:bg-opacity-100">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
