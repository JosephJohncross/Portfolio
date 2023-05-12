import React, { useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import Aos from "aos";
import createSanity from "../../client";

import Button from "../common/Button";
import ProjectCard from "./ProjectCard";
import profilepic from "../../assets/images/profile.jpg";

const reducerFunction = (draft, action) => {};

const initialState = {
  all: "",
  mini: "",
  major: "",
};

const Projects = () => {
  const [allPostsData, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);


  useEffect(() => {
    createSanity
      .fetch(
        `*[_type == "project"]{
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            },
          },
          tags[]->{title},
          technologies,
          categories[]->{title},
          softwareDetails
        }`
      )
      .then((data) => {
        // console.log(data);
        setAllPosts(data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {loading ? (
        <div className="absolute text-start bg-sec pt-32 mini:pt-20 top-0 left-0 right-0 bottom-0 z-50">
          <div className="rounded-full w-20 h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-shadow1 animate-pulse border border-amber-500">
            {/* <div className="w-20 h-20 bg-transparent border-pgreen"></div> */}
            {/* <img src={profilepic} alt="" className="w-full h-full rounded-full anime-loader"/> */}
          </div>
        </div>
      ) : (
        <div className="relative text-start bg-sec pt-32 mini:pt-20 ">
          <div className="container__limiter font-poppins">
            <div className="py-6 bg-sec w-full">
              <ul className="text-white flex justify-center w-full gap-x-5 mini:gap-x-4">
                <Button content={"All"} shade={"bordered-white"} />
                <Button content={"Major"} shade={"bordered-white"} />
                <Button content={"Minor"} shade={"bordered-white"} />
              </ul>
            </div>

            <div className="flex ipad:justify-center ipad:gap-10 mini:gap-16 mt-7 gap-y-10 flex-wrap">
              {allPostsData.map((project, index) => {
                return (
                  <ProjectCard
                    title={project.title}
                    categories={project.categories}
                    tag={project.tags}
                    link={"/projects/" + `${project.slug.current}`}
                    key={project.slug.current}
                    img={project.mainImage.asset.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
