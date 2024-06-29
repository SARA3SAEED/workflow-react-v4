import React, { useEffect, useState } from 'react';
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
    const apiUrl = loggedInUserRole === 'admin'
      ? 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/admin'
      : 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/student';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
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

  return (
    <div>
      {loggedInUserRole === 'admin' ? <SidebarAdmin /> : <Sidebar />}
      <div className="flex-1 p-4">
        <Search handleSearchChange={handleSearchChange} />
        <div className="flex flex-wrap my-9">
          {filteredUsers.map(user => (
            <CardUser key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
