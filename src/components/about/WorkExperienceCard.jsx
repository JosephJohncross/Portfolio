import React, { useRef } from "react";

const WorkExperienceCard = ({ year, position, company, link, img }) => {
  const jobDetail = useRef();

  const showjobDetails = (e) => {
    if (e.target.tagName == "A"){
      return;
    }
    e.preventDefault();
    jobDetail.current.classList.toggle("hidden");
  };

  return (
    <>
      <div
        className="w-full py-9 px-6 bg-alt1 rounded-lg flex flex-col space-y-4 mini:space-y-0 mini:flex-row items-center mini:justify-around border-[1px] border-transparent hover:border-white/20 cursor-pointer"
        onClick={(e) => {
          showjobDetails(e);
        }}
      >
        {/* Year */}
        <p className="text-xl sm:text-2xl mini:text-3xl text-amber-500 font-inter font-medium mini:w-2/5">{year}</p>
        {/* Logo */}
        <div className="rounded-full w-16 h-16 mini:w-20 mini:h-20 bg-white">
          {img}
        </div>
        {/* Position */}
        <div className="flex flex-col mini:w-1/5 text-sm mini:text-lg">
          <p className="text-lg font-mont text-white">{position}</p>
          <p className="font-outfit text-xl text-pgreen">{company || ""}</p>
        </div>
        {/* Link */}
        <p className="font-outfit text-white">
          <a href={link || ""} target="_blank" className="underline underline-offset-4 hover:text-amber-500">Visit</a>
        </p>
        {/* <span className="h-7 w-7 animate-pulse block bg-pgreen/20 rounded-full shadow-shadow3"></span> */}
      </div>

      {/* Detailed Info */}
      <div className="py-7 hidden" ref={jobDetail}>
        <ul className="flex space-y-6 flex-col font-poppins mini:w-max py-8 px-6 bg-white/5 rounded-md shadow-md">
          <li className="flex space-x-5 mini:px-10 px-4 items-center">
            <span className="h-2 w-2 bg-pgreen rotate-45"></span>
            <p className="text-white mini:max-w-xl text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eveniet!
            </p>
          </li>
          <li className="flex space-x-5 mini:px-10 px-4 items-center">
            <span className="h-2 w-2 bg-pgreen rotate-45"></span>
            <p className="text-white mini:max-w-xl text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eveniet!
            </p>
          </li>
          <li className="flex space-x-5 mini:px-10 px-4 items-center">
            <span className="h-2 w-2 bg-pgreen rotate-45"></span>
            <p className="text-white mini:max-w-xl text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eveniet!
            </p>
          </li>
          <li className="flex space-x-5 mini:px-10 px-4 items-center">
            <span className="h-2 w-2 bg-pgreen rotate-45"></span>
            <p className="text-white mini:max-w-xl text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eveniet!
            </p>
          </li>
          <li className="flex space-x-5 mini:px-10 px-4 items-center">
            <span className="h-2 w-2 bg-pgreen rotate-45"></span>
            <p className="text-white mini:max-w-xl text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eveniet!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkExperienceCard;
