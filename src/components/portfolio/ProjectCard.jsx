import React, { useState, useEffect } from "react";
// import project1 from "../../assets/images/project1.svg";
import Button from "../common/Button";
import { Link } from "react-router-dom";

import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import createSanity from "../../client";

const builder = imageUrlBuilder(createSanity);
const urlFor = (source) => {
  return builder.image(source);
};

const ProjectCard = ({ title, tag, img, link, categories }) => {
  var tagLength = 0;
  var categoriesLength = 0;

  const [category, setCategory] = useState([]);

  useEffect(() => {
    categories?.map((c) => {
      setCategory(c?.title)
    });
  }, []);

  return (
    <>
      <div
        className="w-full ipad:w-1/2 mini:w-1/3 bg-black/25 h-80 rounded-md overflow-y-hidden cursor-pointer group"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40 rounded-md z-10 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <img
          src={img}
          alt=""
          className="rounded-md absolute top-1/2 -translate-y-1/2 left-0 bottom-0 right-0 z-[1]"
        />
        <div className="absolute font-nunito z-20 top-0 bottom-0 left-0 right-0 bg-black/50 rounded-md  translate-y-full group-hover:translate-y-1/2 transition-transform delay-100 duration-500 px-5 py-4">
          <p className="text-3xl text-amber-500 font-medium">{title}</p>
          <div className="text-lg text-white"></div>
          <div className="text-lg text-white flex space-x-1 py-2">
            {tag?.map((t) => {
              tagLength = tagLength + 1;
              if (tagLength === tag.length) {
                return <span>{t?.title}</span>;
              }
              return <span>{t?.title + " " + "." + " "}</span>;
            })}
          </div>
          <Link to={link} className="mt-5 font-nunito">
            <Button content={"View More"} shade={"bordered-green"} />
          </Link>
        </div>
      </div>
    
    </>
  );
};

export default ProjectCard;
