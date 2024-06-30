import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import CardUser from '../components/CardUser';
import SidebarAdmin from '../components/SidebarAdmin';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loggedInUserRole, setLoggedInUserRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const role = localStorage.getItem('role');
    
    if (userData && role) {
      const parsedUserData = JSON.parse(userData);
      setLoggedInUserRole(role);
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let apiUrl = '';
        if (loggedInUserRole === 'admin') {
          const response = await axios.get('https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student');
          setUsers(response.data);
          setFilteredUsers(response.data); 
        } else {
          
          apiUrl = 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/admin';
          const response = await axios.get(apiUrl);
          setUsers(response.data);
          setFilteredUsers(response.data); 
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [loggedInUserRole]);

  useEffect(() => {
    const filteredResults = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredResults);
  }, [searchTerm, users]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteUser = async (userId) => {
    
    const updatedUsers = filteredUsers.filter(user => user.id !== userId);
    setFilteredUsers(updatedUsers);

    try {
    
      const apiUrl = loggedInUserRole === 'admin'
        ? `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student/${userId}`
        : `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student/${userId}`;

      const response = await axios.delete(apiUrl);

      if (!response.status === 200) {
        throw new Error(`Failed to delete user ${userId}.`);
      }

      console.log(`User ${userId} deleted successfully.`);

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      {loggedInUserRole === 'admin' ? <SidebarAdmin /> : <Sidebar />}
      <div className="flex-1 p-4">
        <Search handleSearchChange={handleSearchChange} />
        <div className="flex flex-wrap my-9">
          {filteredUsers.map(user => (
            <CardUser
              key={user.id}
              user={user}
              onDelete={handleDeleteUser}  
              loggedInUserRole={loggedInUserRole}  
            />
          ))}
        </div>
      </div>
    </div>
  );
}
