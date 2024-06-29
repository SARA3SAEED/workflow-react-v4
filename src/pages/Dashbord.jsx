import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarAdmin from '../components/SidebarAdmin';

export default function Dashboard() {
  const [user, setUser] = useState(null); 
  const [role, setRole] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser(parsedUserData); 

      
      setRole(parsedUserData.email.toLowerCase().includes('twuaiq') ? 'student' : 'admin');
    }
  }, []); 

  return (
    <div>
      {role === 'student' ? <Sidebar /> : <SidebarAdmin />}
      <div className="flex-1 m-16 p-4">
        <div className="">
          <div className="max-w-lg my-10 bg-white rounded-lg shadow-md p-5 ml-16 lg:mx-auto">
            {user && (
              <>
                <img className="w-32 h-32 rounded-full mx-auto" src="https://img.icons8.com/?size=160&id=QMuDJby5eC7X&format=png" alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">{user.name}</h2>
                <p className="text-center text-gray-600 mt-1">{role === 'student' ? 'Student' : 'Teacher'}</p>
                <hr />
                <div className="mt-5">
                  <h3 className="text-xl font-semibold">Bio</h3>
                  <p className="text-gray-600 mt-2">{user.jobTitle} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
