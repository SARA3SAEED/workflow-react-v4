import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarAdmin from '../components/SidebarAdmin';
import Card from '../components/Card';
import CardAdmin from '../components/CardAdmin';
import Search from '../components/Search';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loggedInUserRole, setLoggedInUserRole] = useState('');
  const [loggedInUserId, setLoggedInUserId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const role = localStorage.getItem('role');
        const user = JSON.parse(localStorage.getItem('user'));

        if (role && user) {
          setLoggedInUserRole(role);
          setLoggedInUserId(user.id);
        }

        let apiUrl = '';

        if (role === 'admin') {
          apiUrl = 'https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects';
        } else if (role === 'student' && user) {
          apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects?studentId=${user.id}`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProjectAction = async (projectId, action) => {
    try {
      const apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects/${projectId}`;
      const updatedStatus = action === 'accept' ? 'In Progress' : 'Rejected';

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update project status');
      }

      const updatedProject = await response.json();
      setProjects(projects.map(project =>
        project.id === projectId ? updatedProject : project
      ));
    } catch (error) {
      console.error('Error updating project status:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects/${projectId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      setProjects(projects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      {loggedInUserRole === 'student' ? <Sidebar /> : <SidebarAdmin />}
      <div className="flex-1 p-4">
        <Search />
        <div className="flex flex-wrap my-9">
          {loading ? (
            <p className="text-center">Loading projects...</p>
          ) : projects.length > 0 ? (
            projects.map(project => (
              loggedInUserRole === 'student' ? (
                <Card
                  key={project.id}
                  project={project}
                  handleProjectAction={handleProjectAction}
                  handleDeleteProject={handleDeleteProject}
                />
              ) : (
                <CardAdmin
                  key={project.id}
                  project={project}
                  handleProjectAction={handleProjectAction}
                  handleDeleteProject={handleDeleteProject}
                />
              )
            ))
          ) : (
            <p className="text-center">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
