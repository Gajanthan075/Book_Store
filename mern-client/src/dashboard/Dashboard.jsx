import React from "react";
import PopularBooks from "./dashboardContent/PopularBooks";
import Overview from "./dashboardContent/Overview";
import Comment from "./dashboardContent/Comment";
import SalesStatistic from "./dashboardContent/SalesStatistic";

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 p-6 w-full">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search books..."
          className="p-2 rounded-md border border-gray-300 w-1/3"
        />
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full bg-gray-200">
            <i className="fas fa-envelope">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                />
              </svg>
            </i>
          </button>
          <button className="relative p-2 rounded-full bg-gray-200">
            <i className="fas fa-bell">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  d="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"
                />
              </svg>
            </i>
          </button>
          <a
            href="/admin/dashboard/upload"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            + Add Book
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Overview */}
        <div className="col-span-8 bg-white rounded-lg shadow p-6">
          <Overview />
        </div>

        {/* Popular Books */}
        <div className="col-span-4 bg-white rounded-lg shadow p-6">
          <PopularBooks />
        </div>

        {/* Comments & Reviews */}
        <div className="col-span-8 bg-white rounded-lg shadow p-6">
          <Comment />
        </div>

        {/* Sales Statistics */}
        <div className="col-span-4 bg-white rounded-lg shadow p-6">
          <SalesStatistic />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
