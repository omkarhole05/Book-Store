import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import { useAuth } from "../../context/AuthProvider";
import  Logout  from "./Logout";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("home");


  return (
    <>
    <div
        className={`container-fluid mx-0 md:px-7 fixed top-0 left-0 right-0 z-10 ${sticky ? "sticky-navbar  shadow-md bg-white duration-100 transition-all ease-in-out"
          : ""
          }`}
      >
      <div
        className="mx-2"
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown bg-blue-500 rounded-md text-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-blue-500 text-white rounded-box z-[1] mt-3 w-40 flex  p-2 shadow">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 mr-2 border rounded-md w-full outline-none bg-white text-black my-2"
                />
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Courses">Courses</Link>
                </li>
                <li>
                  <Link>About</Link>

                </li>
                <li>
                  <Link to="/Contact">Contact</Link>

                </li>
              </ul>
            </div>
            <div className="flex ml-10 md:ml-0">
              <img src="tabIcon.png" alt="icon" className="h-9 ml-2 mr-0" />
              <Link className="btn btn-ghost text-xl font-bold">BookStore</Link>
            </div>
            <div className="navbar-center hidden lg:flex mx-2">
              <ul className="menu menu-horizontal px-1">
                <li >

                  <Link to="/">Home</Link>

                </li>

                <li >
                <Link to="/Courses">Courses</Link>
                </li>

                <li>
                  <Link>About</Link>
                </li>

                <li >
                  <Link to="/Contact">Contact</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <div className="form-control mx-2 ">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 mr-2 border rounded-md md:w-[300px] outline-none opacity-0 md:opacity-100"
              />
            </div>
            {
              authUser ? <Logout /> :
              <div>
              <Link className="btn bg-blue-600 rounded-md hover:bg-blue-700 active:bg-black text-white transition duration-300"
                onClick={() => document.getElementById('my_modal_3').showModal()}>
                Login
              </Link>
              <Login />
              </div>
            }

          </div>
          
        </div>
      </div>
      </div>

          
    </>
  );
}
