import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';

export default function EditDetails() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    studentName: null,
    title: null,
    idea: null,
    task: null,
    managerId: null
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      const apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects/${id}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        const projectData = await response.json();

        setFormData({
          studentName: projectData.studentName,
          title: projectData.title,
          idea: projectData.idea,
          task: projectData.task,
          managerId: projectData.managerId
        });
      } catch (error) {
        console.error('Error fetching project data:', error);
        // Handle error state or notify user
      }
    };

    fetchProjectData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `https://667f2ad1f2cb59c38dc83ddc.mockapi.io/workflow/projects/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update project data');
      }

      console.log('Project data updated successfully!');
      // Handle success, e.g., redirect to another page or show a success message
    } catch (error) {
      console.error('Error updating project data:', error);
      // Handle error state or notify user
    }
  };

  return (
    <>
      <Sidebar />
      <div className="flex items-center justify-center p-12 p-5 ml-28 mt-7 lg:mx-auto">
        <div className="mx-auto w-full max-w-[550px] p-9 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.studentName || ''}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
              Title:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.title || ''}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="idea" className="mb-3 block text-base font-medium text-[#07074D]">
                Idea:
              </label>
              <input
                type="text"
                name="idea"
                id="idea"
                value={formData.idea || ''}
                onChange={handleInputChange}
                placeholder="Enter your idea"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                value={formData.managerId || ''}
                onChange={handleInputChange}
                placeholder="Enter teacher's ID"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
             
            </div>
            <div className="mb-5">
              <label htmlFor="task" className="mb-3 block text-base font-medium text-[#07074D]">
                Task:
              </label>
              <textarea
                rows="4"
                name="task"
                id="task"
                value={formData.task || ''}
                onChange={handleInputChange}
                placeholder="Type your task"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-teal-100 bg-opacity-60 text-teal-600 py-3 px-8 text-base font-semibold outline-none"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
