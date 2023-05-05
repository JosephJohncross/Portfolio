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
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay=""
            >
              <p className="section__title">Work Experience</p>
            </div>
            <div className="flex justify-center">
              <div
                className=""
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <p className="pt-4 text-white max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore dolorum sint repudiandae tenetur asperiores animi
                  nostrum repellendus nihil atque facilis deleniti molestiae
                  aspernatur porro,
                </p>
              </div>
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
