import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

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
                className="flex justify-between items-center font-inter md:px-0 px-6 py-5"
              >
                <div className="">
                  <span id="logo pb-10 md:pb-0">
                    <Link to="/">
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1041 206.69"
                        className="w-24"
                      >
                        <defs>
                          {/* <style>
            .cls-1,.cls-4{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{opacity:0.5;}.cls-4{stroke:#ff6d00;stroke-miterlimit:10;}.cls-5{fill:#ff6d00;}.cls-10{fill:#fff;}.cls-7{fill:#f15a29;}</style> */}
                          <clipPath id="clip-path">
                            <rect
                              class="cls-1"
                              x="-1126.61"
                              y="-1626.33"
                              width="1700"
                              height="1500"
                            />
                          </clipPath>
                        </defs>
                        <g class="cls-2">
                          <g class="cls-3">
                            <path
                              class="cls-4"
                              d="M-233.16-195-914.52-876.33l-228.76,228.76,761.76,761.76c81.94,81.94,214.79,81.94,296.73,0L528.6-499.2c81.94-81.94,81.94-214.79,0-296.73l-80.4-80.4Z"
                            />
                          </g>
                        </g>
                        <path
                          class="cls-5"
                          d="M148.78,103.34l7.15-7.15a18.67,18.67,0,0,0,0-26.4L101.36,15.23a18.66,18.66,0,0,0-26.39,0L7.2,83l20.35,20.35L88.17,42.73Z"
                        />
                        <path
                          class="cls-5"
                          d="M88.17,164,27.55,103.34,7.2,123.7,75,191.46a18.66,18.66,0,0,0,26.39,0l54.57-54.57a18.66,18.66,0,0,0,0-26.39l-7.15-7.16Z"
                        />
                        <rect
                          class="cls-10"
                          x="45.3"
                          y="60.48"
                          width="85.72"
                          height="85.72"
                          transform="translate(-47.25 92.61) rotate(-45)"
                        />
                        <polygon
                          class="cls-7"
                          points="7.2 82.99 7.2 123.7 27.55 103.34 7.2 82.99"
                        />
                        <path
                          class="cls-10"
                          d="M199.79,105.24c0-40.2,33.84-74.22,74-74.22,18.56.27,35,7.6,49.92,22L307.14,75.56c-9.72-9.55-21.38-15.38-33.66-15.38-22.89,0-44.71,20.32-44.71,45.24,0,25.36,22.62,45,44.62,45,13.08,0,24.39-7,33.84-16.26l16.43,23.15c-12.54,12.46-27.83,21.82-49.39,21.82C233.19,179.11,199.79,145.27,199.79,105.24Z"
                        />
                        <path
                          class="cls-10"
                          d="M333.12,123.36a56.55,56.55,0,1,1,56.64,56.55A56.57,56.57,0,0,1,333.12,123.36Zm85.88,0a29.34,29.34,0,1,0-29.24,29.33A29.3,29.3,0,0,0,419,123.36Z"
                        />
                        <circle
                          class="cls-5"
                          cx="478.82"
                          cy="42.16"
                          r="15.37"
                        />
                        <rect
                          class="cls-10"
                          x="465.21"
                          y="70.34"
                          width="27.21"
                          height="106.03"
                        />
                        <path
                          class="cls-10"
                          d="M613.48,119v57.34H586.27V119c0-18.56-6.9-25-20.5-25-13.43,0-21.39,9.1-21.39,25v57.34H517.17v-106h25.45l1.06,10.52c7.68-8.31,18.29-13.17,31.19-13.17C595.19,67.69,613.48,77.68,613.48,119Z"
                        />
                        <path
                          class="cls-10"
                          d="M631.59,150.4l6.1-5c6.54,13.52,24.39,23.77,41.18,23.77,21.73,0,40.64-12.82,40.64-30.66,0-19.36-22.44-26.78-42.59-33.32-18.29-6.09-39-14.57-39-36.13,0-20.33,19-36.76,43.29-36.76,22.18,0,35.61,13.69,40.12,25.8l-6.72,4.24c-4.77-12.1-18.11-21.56-33.84-21.56-18.11,0-34.19,12.37-34.19,28.36,0,17,18.55,23.24,38.08,30.05,20.06,7.15,43.47,15.72,43.47,39.14,0,23.77-23.59,39.41-49,39.41C655.54,177.79,636.72,164.18,631.59,150.4Z"
                        />
                        <path
                          class="cls-10"
                          d="M834.2,119v57.34h-8.31V119c0-31.19-13.78-43.21-32.87-43.21-20.32,0-35,12.28-35,43.21v57.34h-8.3V30.58H758V89.52c7.07-14.94,20.33-21.83,36.85-21.83C817.23,67.69,834.2,81.39,834.2,119Z"
                        />
                        <path
                          class="cls-10"
                          d="M956.22,127.07,954.9,127v.09H865c1.76,26.15,21.73,44,44.53,44,13.34,0,27.48-6.18,34.46-13.69l5.65,5.65c-7.77,9.46-24.56,16.17-40,16.17-29.07,0-52.93-23.59-52.93-55.93,0-31.81,23-55.75,52-55.75,27.48,0,48.51,21.38,48.51,51.42A25.45,25.45,0,0,1,956.22,127.07ZM865,120h84.38v-1.15c0-21.56-14.49-43.21-40.29-43.21C885,75.64,866.36,94.55,865,120Z"
                        />
                        <path
                          class="cls-10"
                          d="M1033.8,66.63l-1.41,8.84a13.51,13.51,0,0,0-2-.09c-22.79.62-42.32,15.9-42.32,52v49h-8.31v-106h8L988.12,88v7.6C997.4,73.26,1016.57,66.72,1033.8,66.63Z"
                        />
                      </svg>
                    </Link>
                  </span>
                </div>

                {/* navigation */}
                {/* Middle section */}
                <div className="header-middle text-white ">
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
                        <span>Blog</span>
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
