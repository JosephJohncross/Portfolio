import React, { useState, useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";

const MobileNav = ({ toggleMobileNav }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const toggleNav = () => {
    toggleMobileNav();
  };

  const closeMobile = (e) => {
    if (e.target.classList.contains("drop-down__item")) {
      toggleNav();
    }
  };

  return (
    <nav className="">
      <div id="" className="">
        <div className="">
          <div
            className="h-screen overflow-y-scroll peer absolute top-0 right-0 z-[200] w-2/3 font-inter bg-black/40 backdrop-blur-sm md:hidden md:z-0 shadow-xl"
            onClick={(e) => {
              closeMobile(e);
            }}
          >
            <div className="flex justify-between items-center px-4 py-6">
              <div
                className=""
                onClick={() => {
                  toggleNav();
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png"
                  className="w-7 h-7"
                />
              </div>
            </div>

            {/* Mobile nav content */}
            <ul className="absolute flex flex-col text-black w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-8 font-nunito font-semibold text-2xl ">
              <li className="font-semibold px-4 w-full text-center">
                <Link
                  to="/"
                  className="text-white drop-down__item"
                  onClick={(e) => {
                    closeMobile(e);
                  }}
                >
                  Home
                </Link>
              </li>
              {/* Education */}
              <li className="font-semibold text-[#101828] px-4 w-full text-center">
                <Link
                  to={"about"}
                  className="text-white drop-down__item"
                  onClick={(e) => {
                    closeMobile(e);
                  }}
                >
                  About
                </Link>
              </li>
              <li className="font-semibold text-[#101828] px-4 w-full text-center">
                <Link
                  to={"projects"}
                  className="text-white drop-down__item"
                  onClick={(e) => {
                    closeMobile(e);
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="font-semibold text-[#101828] px-4 w-full text-center">
                <Link
                  to={""}
                  className="text-white drop-down__item"
                  onClick={(e) => {
                    closeMobile(e);
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
