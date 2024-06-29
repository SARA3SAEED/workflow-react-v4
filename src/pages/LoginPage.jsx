import React from 'react';
import Nav from '../components/Nav';


export default function LoginPage() {
  return (
    <>
    <Nav />
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto p-4">
        <div className="p-8 my-16 bg-white bg-opacity-90 rounded-3xl shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[580px]">
          <div className="absolute top-0 left-0 h-full w-1/2 z-10">
            <form className="bg-white bg-opacity-90 flex flex-col items-center justify-center p-10 h-full">
              <h1 className="font-primary text-2xl font-medium">Login</h1>
              <input type="text" placeholder="Username" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <input type="password" placeholder="Password" className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none" />
              <button type="submit" className="btn bg-teal-600 bg-opacity-70 text-white mt-2 py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-800 hover:bg-opacity-100">Login</button>
            </form>
          </div>

          <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-[150px_0_0_100px] z-[1000]">
            <div className="toggle bg-gradient-to-r from-teal-500 to-teal-700 bg-opacity-120 text-white relative left-[-100%] h-full w-[200%]">
              <div className="toggle-panel bg-opacity-20 absolute right-0 w-1/2 h-full flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                <p className="text-lg leading-5 tracking-wide my-5">Enter your personal details to continue your work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
