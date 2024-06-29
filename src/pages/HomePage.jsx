import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import img1 from '../assets/Screenshot.png';
import img2 from '../assets/Screenshot1.png';
import img3 from '../assets/Screenshot2.png';
import img4 from '../assets/Screenshot3.png';
import img5 from '../assets/TaskFlow-icon.png';


export default function HomePage() {
  return (
    <>
      <Nav />

      <div className="flex flex-wrap">
        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl px-8 m-2 font-[600]">Work Smartly With Endless Possibilities</h1>
              <p className="pl-10 pr-20 font-[450]">
                Streamline collaboration, boost productivity, and achieve project success with our intuitive project management solution.
              </p>
              <a href="/signup" className=" mx-10 my-4 btn bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-700 bg-opacity-70">Get Started</a>
            </div>
            <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl">
              <div className="card-body">
                <img src={img1} alt="Image 1" />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 mx-60 border-gray-500 w-[60%] " />
        

        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <small className="m-5 pl-10 pr-20 text-teal-600 font-bold">ORGANIZED</small>
              <h1 className="text-4xl px-8 m-5 font-[600]">Intuitive Task Management</h1>
              <p className="m-5 pl-10 pr-20 font-[450]">
                Easily create, assign, and track tasks with our user-friendly interface. Stay organized and keep your team on the same page.
              </p>
            </div>
            <img src={img2} className="mr-12 shadow-2xl" alt="Image 2" />
          </div>
        </div>


        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <small className="m-5 pl-10 pr-20 text-teal-600 font-bold">COLLABORATION</small>
              <h1 className="text-4xl px-8 m-5 font-[600]">Collaborative Workspaces</h1>
              <p className="m-5 pl-10 pr-20 font-[450]">
                Foster collaboration by creating dedicated workspaces for your projects. Share files, updates, and feedback in one central location.
              </p>
            </div>
            <img src={img3} className="ml-12 shadow-2xl" alt="Image 3" />
          </div>
        </div>


        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <small className="m-5 pl-10 pr-20 text-teal-600 font-bold">VISIBILITY</small>
              <h1 className="text-4xl px-8 m-5 font-[600]">Real-Time Progress Tracking</h1>
              <p className="m-5 pl-10 pr-20 font-[450]">
                Monitor project progress in real-time with interactive dashboards. Identify bottlenecks and ensure projects stay on schedule.
              </p>
            </div>
            <img src={img4} className="mr-14 shadow-2xl" alt="Image 4" />
          </div>
        </div>


        <hr className="my-8 mx-60 border-gray-500 w-[60%] " />

        <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="/">
                <img className="w-[100px] h-[100px]" src={img5} alt=""/>
            </a>
            <p className="max-w-md mx-auto mt-4  dark:text-gray-400  font-[600] text-4xl "> Manage any project, with TaskFlow</p>
            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="flex items-center justify-center order-1 w-full  py-2 mt-3 text-sm btn tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <Link className="text-gray-700 dark:text-gray-200 lg:px-2 dark:hover:text-teal-600 w-[80px] hover:text-teal-600" to="/login">Login</Link>
            </button>
                <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform btn bg-teal-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 mx-10 my-4 btn bg-teal-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-700 bg-opacity-70">
                <Link className="text-gray-700 text-white dark:text-gray-200 lg:px-2 " to="/signup">Sign up</Link></button>
            </div>
            <p className=" p-5 mt-5 text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>
        </div>
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
    </div>

      </div>
    </>
  );
}
