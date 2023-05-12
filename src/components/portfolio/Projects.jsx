import React, { useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import Aos from "aos";
import createSanity from "../../client";

import Button from "../common/Button";
import ProjectCard from "./ProjectCard";

const reducerFunction = (draft, action) => {};

const initialState = {
  all: "",
  mini: "",
  major: "",
};

const Projects = () => {
  // const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
  const [allPostsData, setAllPosts] = useState([]);

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
        console.log(data);
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="relative text-start bg-sec pt-44 mini:pt-20 ">
        <div className="container__limiter font-poppins">
          <div className="py-6 bg-sec w-full">
            <ul className="text-white flex justify-center w-full gap-x-5 mini:gap-x-4">
              <Button content={"All"} shade={"bordered-white"} />
              <Button content={"Major"} shade={"bordered-white"} />
              <Button content={"Minor"} shade={"bordered-white"} />
            </ul>
          </div>

          <div className="flex ipad:justify-center ipad:gap-10 mini:gap-16 mt-20 gap-y-10 flex-wrap">
            {allPostsData.map((project, index) => {
              return (
              <ProjectCard
                title={project.title}
                categories={project.categories}
                tag={project.tags}
                link={"/projects/" + `${project.slug.current}`}
                key={project.slug.current}
                img={project.mainImage.asset.url}
              />)
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
