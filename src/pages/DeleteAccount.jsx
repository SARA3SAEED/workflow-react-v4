// DeleteAccount.js

import React from 'react';

const DeleteAccount = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this student account?')) {
      onDelete(); // Call onDelete function passed from parent component
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="btn bg-red-600 text-white mt-2 py-2 px-4 rounded transition-colors duration-300 hover:bg-red-800"
    >
      Delete Account
    </button>
  );
};

export default DeleteAccount;
