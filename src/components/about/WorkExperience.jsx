import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <>
      <section className="py-20  relative">
        {/* <div className="grad1"></div> */}
        <div className="text-center container__limiter bg-transparent z-[2]">
          {/* Heading */}
          <div className="">
            <p className="section__title">Work Experience</p>
            <div className="flex justify-center">
              <p className="pt-4 text-white max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                dolorum sint repudiandae tenetur asperiores animi nostrum
                repellendus nihil atque facilis deleniti molestiae aspernatur
                porro,
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="pt-20 flex flex-col gap-y-6">
            <WorkExperienceCard
              img={""}
              link={""}
              company={"BOurtmouth, New Jersey"}
              position={"Frontend Developer"}
              year={"2021-2022"}
            />
            <WorkExperienceCard
              img={""}
              link={""}
              company={"BOurtmouth, New Jersey"}
              position={"Frontend Developer"}
              year={"2021-2022"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
