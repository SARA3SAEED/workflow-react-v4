import React from 'react'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';


export default function Details() {
  return (
    <>
        <Sidebar />
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mx-auto sm:py-12">
        <div class="">
            <div class="h-auto py-20 px-10 w-2/3 bg-gray-200 bg-opacity-60 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl  ">
            <h1 class=" font-medium text-teal-600 text-xl tracking-wide">Workcation</h1>
            <h2 class="font-normal tracking-wide text-2xl  lg:w-2/5">Workflow has completely transformed how we interact with our customers. We've seen record bookings, higher customer satisfaction and reduced churn</h2>
            <div class="flex flex-col">
                <h4 class=" font-medium text-xl text-red-400 text-sm tracking-wide">Tasks : </h4>
                
                <div className='flex'>
                <img src="https://img.icons8.com/?size=96&id=107458&format=png" 
                className="w-3 h-3 mt-2 mr-1 ml-6"
                 />
                <p class="font-normal tracking-wide text-1xl  lg:w-2/5">
                  CEO Workcation</p>
                </div>
             
                <div class="flex items-center mt-4">
                <Link to="/edit" class="btn w-44 bg-teal-400 bg-opacity-130  text-white py-2 px-4 rounded-md hover:bg-teal-800">
                    Edit
                </Link>

                <Link to="/edit" class="btn m-3 w-44 bg-base-900 bg-opacity-130  text-teal-900 py-2 px-4 rounded-md hover:text-white hover:bg-teal-800">
                    Status
                </Link>
                </div>
                
                
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
