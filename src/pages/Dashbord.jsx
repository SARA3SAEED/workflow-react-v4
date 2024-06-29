import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

export default function Dashboard() {
  return (
    <div >
      <Sidebar />
      <div className="flex-1 m-16 p-4">
       

        <div className="">
              <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                <img class="w-32 h-32 rounded-full mx-auto" src="https://img.icons8.com/?size=160&id=QMuDJby5eC7X&format=png" alt="Profile picture" />
                <h2 class="text-center text-2xl font-semibold mt-3">John Doe</h2>
                <p class="text-center text-gray-600 mt-1">Software Engineer</p>
                <hr />
                <div class="mt-5">
                  <h3 class="text-xl font-semibold">Bio</h3>
                  <p class="text-gray-600 mt-2">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
