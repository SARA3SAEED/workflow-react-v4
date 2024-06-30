import React from 'react';
import { Link } from 'react-router-dom';

export default function CardAdmin({ project, handleProjectAction, handleDeleteProject }) {
  return (
    <div key={project.id} className="card bg-base-100 lg:ml-28 lg:w-[37%] shadow-xl m-4">
      <div className="card-body ">
        <div className="h-full  lg:h-48 lg:w-76 lg:mb-0 mb-3">
          <img
            src="https://media.istockphoto.com/id/1366460179/photo/several-balancing-geometric-shapes.jpg?s=612x612&w=0&k=20&c=U1xRj9-TPLV8Cs2m8GwO10mbd5VRXnEn6_WgH_xIi4E="
            alt="Project"
            className="w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl"
          />
        </div>
        <h2 className="card-title">{project.title}</h2>
        <p>Student: {project.studentName}</p>
        <p>Status: {project.status}</p>
        <p>Task: {project.task}</p>

        <div className="card-actions justify-end">
          {project.status === 'pending' && (
            <>
              <button
                className="btn btn-outline btn-success mr-2"
                onClick={() => handleProjectAction(project.id, 'accept')}
              >
                Accept
              </button>
              <button
                className="btn btn-outline btn-error mr-2"
                onClick={() => handleProjectAction(project.id, 'reject')}
              >
                Reject
              </button>
            </>
          )}
          <button
            className="btn btn-outline btn-gray"
            onClick={() => handleDeleteProject(project.id)}
          >
            Delete
          </button>
          <Link to={`/edit/${project.id}`} className="btn btn-outline btn-primary ml-2">
            Edit
          </Link>
        </div>
        {project.adminComment && (
          <p className="mt-2">Admin Comment: {project.adminComment}</p>
        )}
      </div>
    </div>
  );
}
