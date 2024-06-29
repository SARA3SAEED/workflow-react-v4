import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');

  const apiUrl = role === 'admin'
    ? 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/admin'
    : 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student';

    

    const determineRole = (email) => {
      if (email.toLowerCase().includes('twuaiq')) {
        return 'student';
      } else {
        return 'admin';
      }
    };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const response = await fetch(apiUrl);
      if (response.ok) {
        const userData = await response.json();
        // Find the user based on entered email and password match
        const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
          // Determine role based on user email
          const userRole = determineRole(email);
          
          // Update localStorage with user and role
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('role', userRole);
    
          navigate('/dashbord');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('Failed to fetch user data');
      }
    };
    
    const handleEmailChange = (e) => {
      const { value } = e.target;
      setEmail(value);
      // Update role based on the entered email
      setRole(determineRole(value));
    };
    

  // Function to clear localStorage
  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  // Check if localStorage needs to be cleared on component mount
  if (localStorage.getItem('user') || localStorage.getItem('role')) {
    clearLocalStorage();
  }

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto p-4">
        <div className="my-16 bg-white bg-opacity-90 rounded-3xl shadow-2xl relative overflow-hidden w-full lg:w-[768px] max-w-full min-h-[580px]">
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:h-[600px] h-[250px] flex-col lg:rounded-tl-3xl lg:rounded-bl-3xl items-center justify-center p-2 w-full lg:w-1/2 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
              <h1 className="text-3xl p-5 font-bold">Welcome Back!</h1>
              <p className="text-lg leading-5 p-5 tracking-wide my-5 text-center">Enter your personal details to continue your work</p>
            </div>

            <div className="bg-white bg-opacity-90 flex flex-col items-center justify-center p-10 w-full lg:w-1/2">
              <h1 className="font-primary text-2xl font-medium">Login</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="font-primary bg-gray-200 bg-opacity-70 border-none mt-4 p-3 text-sm rounded-lg w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn bg-teal-600 bg-opacity-70 text-white mt-2 py-2 px-4 rounded transition-colors duration-300 hover:bg-teal-800 hover:bg-opacity-100"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
