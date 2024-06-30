import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function Add() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    idea: '',
    admin: '',
    task: ''
  });
  const [managerName, setManagerName] = useState('');
  const [adminError, setAdminError] = useState('');

  useEffect(() => {
    // Fetch user data from localStorage on component mount
    const fetchUserData = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedUserData = JSON.parse(userData);
          if (parsedUserData && parsedUserData.id && parsedUserData.name) {
            // Set initial form data with user's name
            setFormData({ ...formData, name: parsedUserData.name });
          } else {
            throw new Error('Invalid user data format');
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.error('User data not found in localStorage');
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.admin) {
        throw new Error('Please enter a valid admin ID');
      }

      // Proceed with form submission
      const studentId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null;
      const projectData = {
        title: formData.subject,
        idea: formData.idea,
        task: formData.task,
        status: 'pending',
        studentName: formData.name,
        adminComment: '',
        managerId: formData.admin,
        managerName: '',
        createdAt: new Date().toISOString(),
        studentId: studentId
      };

      // Fetch admin data
      const apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/admin/${formData.admin}`;
      const response = await fetch(apiUrl);

      if (response.ok) {
        const adminData = await response.json();
        if (Array.isArray(adminData) && adminData.length > 0) {
          projectData.managerName = adminData[0].name; // Assuming adminData is an array
        } else if (adminData && adminData.name) {
          projectData.managerName = adminData.name; // Assuming adminData is an object
        } else {
          throw new Error('Admin not found');
        }

        // Post project data
        const postResponse = await fetch('https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        });

        if (postResponse.ok) {
          const responseData = await postResponse.json();
          console.log('Project created successfully:', responseData);
          // Optionally clear form data after successful submission
          setFormData({
            name: '',
            subject: '',
            idea: '',
            admin: '',
            task: ''
          });
        } else {
          throw new Error('Failed to create project');
        }
      } else {
        throw new Error('Admin ID not found'); // Handle specific error message if needed
      }
    } catch (error) {
      console.error('Error creating project:', error);
      setAdminError(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Sidebar />
      <div className="flex items-center justify-center p-12 p-5 ml-28 mt-7 lg:mx-auto">
        <div className="mx-auto w-full max-w-[550px] p-9 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="idea"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Idea:
              </label>
              <input
                type="text"
                name="idea"
                id="idea"
                value={formData.idea}
                onChange={handleChange}
                placeholder="Enter your idea"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="admin"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Teacher ID:
              </label>
              <input
                type="text"
                name="admin"
                id="admin"
                value={formData.admin}
                onChange={handleChange}
                placeholder="Enter teacher's ID"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
              {adminError && (
                <p className="text-red-500 text-sm mt-1">{adminError}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="task"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Task:
              </label>
              <textarea
                rows="4"
                name="task"
                id="task"
                value={formData.task}
                onChange={handleChange}
                placeholder="Type your task"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-teal-200 bg-opacity-60 text-teal-600 py-3 px-8 text-base font-semibold  outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
