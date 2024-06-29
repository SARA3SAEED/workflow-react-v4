import React, { useState } from 'react';
import Nav from '../components/Nav';

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <>
      <Nav />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />

      <div className="flex items-center justify-center w-full max-w-7xl mx-auto p-4">
        <div className="p-8 my-16 bg-white bg-opacity-90 rounded-3xl shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[580px]">
          <div className="absolute top-0 left-0 h-full w-1/2 z-10">
            <form className="bg-white bg-opacity-90 flex flex-col items-center justify-center p-10 h-full">
              <h1 className="font-primary text-2xl font-medium">Create Account</h1>
              <input type="text" placeholder="Name" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <input type="email" placeholder="Email" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <input type="text" placeholder="Job title" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />

              <input type="password" placeholder="Password" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <div className="radio h-[40px] mt-4 w-full inline-flex overflow-hidden rounded-lg">
                <input 
                  className="radio__input hidden" 
                  type="radio" 
                  value="admin" 
                  id="radio1" 
                  checked={selectedRole === 'admin'} 
                  onChange={() => handleRoleChange('admin')}
                />
                <label 
                  className={`radio__label text-center w-full mr-1 p-2 text-sm cursor-pointer transition duration-100 ${selectedRole === 'admin' ? 'bg-teal-600 bg-opacity-70 text-white' : 'bg-gray-200 bg-opacity-70 text-gray-700'}`} 
                  htmlFor="radio1"
                >
                  Admin
                </label>
                <input 
                  className="radio__input hidden" 
                  type="radio" 
                  value="student" 
                  id="radio2" 
                  checked={selectedRole === 'student'} 
                  onChange={() => handleRoleChange('student')}
                />
                <label 
                  className={`radio__label text-center w-full p-2 text-sm cursor-pointer transition duration-100 ${selectedRole === 'student' ? 'bg-teal-600 bg-opacity-70 text-white' : 'bg-gray-200 bg-opacity-70 text-gray-700'}`} 
                  htmlFor="radio2"
                >
                  Student
                </label>
              </div>
              <button type="submit" className="btn bg-teal-600 bg-opacity-70 text-white mt-2 py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-800 hover:bg-opacity-100">Sign up</button>
            </form>
          </div>

          <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-[150px_0_0_100px] z-[1000]">
            <div className="toggle bg-gradient-to-r from-teal-500 to-teal-700 bg-opacity-120 text-white relative left-[-100%] h-full w-[200%]">
              <div className="toggle-panel bg-opacity-20  absolute right-0 w-1/2 h-full flex flex-col items-center justify-center p-8 text-center ">
                <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                <p className="text-lg leading-5 tracking-wide my-5">Register with your personal details to use all of site features</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
