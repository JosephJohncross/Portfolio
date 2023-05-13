import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

import profilePic from "../assets/images/profile.jpg"

const Header = ({ toggleMobileNav }) => {
  const toggleNav = () => {
    toggleMobileNav();
  };

  return (
    <div className="sticky top-0 w-full bg-pri z-40 border-blue-900">
      <div className="w-full flex">
        <div
          id="header-container"
          className="bg-altColor w-full z-10"
        >
          <div className="container mx-auto max-w-screen-xl py-3 sm:px-6 lg:px-8 sm:py-0">
            <div className="md:pb-0">
              <div
                id=""
                className="flex justify-between items-center font-inter md:px-0 px-6 mini:py-5"
              >
                <div className="">
                  <span id="logo pb-10 md:pb-0">
                    <Link to="/">
                      <img src={profilePic} alt="" className="w-9 h-9 rounded-full"/>
                    </Link>
                  </span>
                </div>

                {/* navigation */}
                {/* Middle section */}
                <div className="header-middle text-white">
                  <nav className="flex justify-center items-center space-x-5 md:space-x-5 ">
                    <ul className=" hidden lg:flex lg:justify-evenly space-x-12">
                      {/* Home */}
                      <li className="hover:text-priColor cursor-pointer">
                        <Link to={"/"}>Home</Link>
                      </li>

                      {/* About */}
                      <li className="hover:text-priColor cursor-pointer">
                        <Link to={"about"}>About</Link>
                      </li>

                      {/* Projects */}
                      <div className="dropdown group relative ">
                        <li className="group roty group-hover:text-priColor flex items-center space-x-1 cursor-pointer hover:text-priColor">
                          <Link to={"projects"}>Projects</Link>
                        </li>
                      </div>

                      {/* Blog */}
                    <div className="hidden lg:block dropdown group relative ">
                      <li className="group group-hover:text-priColor roty flex items-center space-x-1 cursor-pointer hover:text-priColor">
                        <Link to={"blog"}>Blog</Link>
                      </li>
                    </div>
                    </ul>

                    

                  </nav>
                </div>
                {/* En/button */}
                <div className="header-right text-white flex space-x-2 md:space-x-4">
                    <Button
                        shade={"green"}
                        content={"Resume"}
                        // icon={}
                    ></Button>
                  <div
                    id="hamburger"
                    className="flex items-center justify-center cursor-pointer md:hidden "
                  >
                    <div
                      className="md:hidden "
                      onClick={() => {
                        toggleNav();
                      }}
                    >
                      <span className="block bg-white mb-1 h-[2px] w-5 lg:hidden"></span>
                      <span className="block bg-white mb-1 h-[2px] w-5 lg:hidden"></span>
                      <span className="block bg-white mb-1 h-[2px] w-5 lg:hidden"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
