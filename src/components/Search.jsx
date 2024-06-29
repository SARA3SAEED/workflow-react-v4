import React from 'react';

export default function Search({ handleSearchChange }) {
  return (
    <div>
     

      <div className="lg:max-w-2xl mx-40 my-10 w-[60%] lg:mx-auto lg:mt-16  mx:42">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-teal-50 rounded-lg border border-teal-700  focus:border-teal-400  bg-opacity-20"
              placeholder="Search ..."
              onChange={handleSearchChange} 
              required
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-green-200 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
