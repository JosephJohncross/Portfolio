import React from "react";

const ProjectCard = () => {
  return (
    <div
      className="w-full ipad:w-1/2 mini:w-1/3 bg-black/25 h-80 rounded-md overflow-y-hidden cursor-pointer group"
      data-aos="zoom-in"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="500"
      data-aos-delay="100"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20 rounded-md -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
      <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-black/5 rounded-md  translate-y-full group-hover:translate-y-1/2 transition-transform duration-700">
      </div>
    </div>
  );
};

export default ProjectCard;
