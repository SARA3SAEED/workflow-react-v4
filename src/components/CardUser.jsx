import React from 'react';

export default function CardUser({ user, onDelete, loggedInUserRole }) {
  const isAdmin = loggedInUserRole === 'admin';

  const handleDelete = () => {
    // Call onDelete function passed from parent component
    onDelete(user.id);
  };

  return (
    <div className="lg:w-[30%] w-[50%] l max-w-sm bg-white ml-40 shadow-lg rounded-lg overflow-hidden my-4">
      <img 
        src="https://img.icons8.com/?size=160&id=QMuDJby5eC7X&format=png" 
        className='w-32' 
        alt="avatar" 
      />
      <hr />
      <div className="py-4 px-6">
        <h6 className="text-2xl font-semibold text-gray-800">{user.name}</h6>
        <p className=' lg:h-28'>{user.jobTitle}</p>
        <hr />
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
          </svg>
          <h1 className="px-2 text-sm">{user.email}</h1>
        </div>
        {isAdmin && (
          <button
            className="bg-red-500 ml-24 lg:ml-56 hover:bg-red-600 text-white py-2 px-4 rounded mt-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
