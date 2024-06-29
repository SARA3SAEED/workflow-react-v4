import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

export default function SignupPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    password: '',
  });

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, jobTitle, password } = formData;

    if (selectedRole === 'student' && !email.includes('twuaiq')) {
      console.error('For students, the email must contain the word "twuaiq" to sign up.');
      return;
    }

    const apiUrl = selectedRole === 'admin' ? 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/admin' : 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          jobTitle,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      console.log(`${selectedRole} signed up successfully!`);
      navigate('/login');
    } catch (error) {
      console.error(`Failed to sign up ${selectedRole}:`, error);
    }
  };

  

  return (
    <>
      <Nav />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />

      <div className="flex flex-wrap items-center justify-center w-full max-w-7xl mx-auto p-4">
        <div className="my-16 bg-white bg-opacity-90 rounded-3xl shadow-2xl relative overflow-hidden w-full lg:w-[768px] max-w-full min-h-[580px]">
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:h-[600px] h-[250px] flex-col lg:rounded-tl-3xl lg:rounded-bl-3xl  items-center justify-center p-2 w-full lg:w-1/2 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="text-lg leading-5 tracking-wide my-5 text-center">Register with your personal details to use all of site features</p>
            </div>

            <div className="bg-white bg-opacity-90 flex flex-col items-center justify-center p-10 w-full lg:w-1/2">
              <h1 className="font-primary text-2xl font-medium">Create Account</h1>
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                />
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job title"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                />
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
                    className={`radio__label text-center w-full mr-1 p-2 text-sm cursor-pointer transition duration-100 ${
                      selectedRole === 'admin' ? 'bg-teal-600 bg-opacity-70 text-white' : 'bg-gray-200 bg-opacity-70 text-gray-700'
                    }`}
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
                    className={`radio__label text-center w-full p-2 text-sm cursor-pointer transition duration-100 ${
                      selectedRole === 'student' ? 'bg-teal-600 bg-opacity-70 text-white' : 'bg-gray-200 bg-opacity-70 text-gray-700'
                    }`}
                    htmlFor="radio2"
                  >
                    Student
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn w-40 mx-20 lg:mx-16 bg-teal-600 bg-opacity-70 text-white mt-2 py-2 px-2 rounded transition-colors duration-300 hover:bg-teal-800 hover:bg-opacity-100"
                >
                 Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
