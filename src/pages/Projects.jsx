import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Search from '../components/Search';
import SidebarAdmin from '../components/SidebarAdmin';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loggedInUserRole, setLoggedInUserRole] = useState('');
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('role');
    const user = JSON.parse(localStorage.getItem('user'));

    if (role && user) {
      setLoggedInUserRole(role);
      setLoggedInUserId(user.id);
    }
  }, []);

  useEffect(() => {
    const apiUrl = loggedInUserRole === 'admin'
      ? 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects'
      : 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects'; 

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (loggedInUserRole === 'student') {
          const studentProjects = data.filter(project => project.studentId === loggedInUserId);
          setProjects(studentProjects);
        } else {
          setProjects(data);
        }
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, [loggedInUserRole, loggedInUserId]);

  return (
    <div>
      {loggedInUserRole === 'student' ? <Sidebar /> : <SidebarAdmin />}
      <div className="flex-1 p-4">
        <Search />
        <div className="flex flex-wrap my-9">
          {projects.length > 0 ? (
            projects.map(project => <Card key={project.id} project={project} />)
          ) : (
            <p className="text-center">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
