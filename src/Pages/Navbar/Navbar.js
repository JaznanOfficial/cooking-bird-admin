import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-white py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap justify-between items-center px-5">
        <div className="sm-logo">
          <a
            className="flex flex-row-reverse items-center justify-center"
            href="/"
          >
            <h1 className="sm:w-52 w-10 style-header font-semibold text-4xl text-red-600">
              COOKING BIRD
            </h1>
            <img
              className="sm:w-20 w-10"
              src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
              alt=""
            />
          </a>
        </div>

        <div></div>

        <div className="dropdown dropdown-end">
          <Link
            to="/"
            className="ml-3 mr-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
          >
          Create shop
          </Link>
          <label
            tabIndex="0"
            className="btn btn-ghost btn-circle hover:bg-red-300 avatar"
          >
            <div className="w-10 rounded-full">
              <img 
              src="https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png" 
              alt="user-img" />
            </div>
          </label>

          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/user-profile"
                className="font-medium bg-red-50 hover:bg-red-100 text-navy-900 hover:text-red-600 justify-between"
              >
                Current user <br />
                User Email
              </Link>
              <Link
                to="/user-profile"
                className="font-medium hover:bg-red-100 text-navy-900 hover:text-red-600 justify-between"
              >
                Profile
              </Link>
            </li>

            <li>
              <button
                onClick=""
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
