import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ project, handleProjectAction, handleDeleteProject }) {
  const Status = {
    'Pending': 'text-gray-600',
    'In Progress': 'text-blue-700',
    'Completed': 'text-green-600'
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="bg-white shadow-md rounded-3xl p-4 ml-32 lg:ml-64 mb-5 w-[70%] lg:w-[56%]">
      <div className="flex-none lg:flex">
        <div className="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
          <img
            src="https://media.istockphoto.com/id/1366460179/photo/several-balancing-geometric-shapes.jpg?s=612x612&w=0&k=20&c=U1xRj9-TPLV8Cs2m8GwO10mbd5VRXnEn6_WgH_xIi4E="
            alt="Project"
            className="w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl"
          />
        </div>
        <div className="flex-auto ml-6 justify-evenly py-2">
          <div className="flex flex-wrap">
            <div className="w-full flex-none text-xs text-blue-700 font-medium">
              Project
            </div>
            <h2 className="flex-auto text-lg font-medium">{project.title}</h2>
          </div>
          <p className="mt-3 text-red-500 font-[300] text-lg">Student Name : {project.studentName}</p>
          <p className="mt-3">Task : - {project.task}</p>
          <div className="flex py-4 text-sm text-gray-500">
            <div className='flex mr-9'>
              <img
                src="https://img.icons8.com/?size=96&id=ZatjWu34MxGf&format=png"
                className='w-5 mr-1'
                alt="Status Icon"
              />
              <p className={Status[project.status]}>{project.status}</p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p>{formatDate(project.createdAt)}</p>
            </div>
          </div>
          <div className="flex p-2 pb-2 border-t border-gray-200"></div>
          <div className="flex space-x-3 text-sm font-medium">
            <div className="flex-auto flex justify-end	 space-x-2">
              <button className="mb-2 w-[20%] md:mb-0 bg-white px-7 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2">
                <Link to={`/edit/${project.id}`}>Edit</Link>
              </button>
          
              {project.status === 'Pending' && (
                <>
                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-600"
                    type="button"
                    onClick={() => handleProjectAction(project.id, 'accept')}
                  >
                    Accept
                  </button>
                  <button
                    className="mb-2 md:mb-0 bg-red-400 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-red-600"
                    type="button"
                    onClick={() => handleProjectAction(project.id, 'reject')}
                  >
                    Reject
                  </button>
                </>
              )}
              <button
                className="mb-2 md:mb-0 bg-red-400 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-red-600"
                type="button"
                onClick={() => handleDeleteProject(project.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
