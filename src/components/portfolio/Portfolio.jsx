import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useImmerReducer } from "use-immer";
import Button from "../common/Button";
import Aos from "aos";

const reducerFunction = (draft, action) => {};

const initialState = {
  all: "",
  mini: "",
  major: "",
};

const Portfolio = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  useEffect(() => {
    Aos.init()
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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
