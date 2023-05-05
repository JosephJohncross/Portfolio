import React from "react";
import project1 from "../../assets/images/project1.svg";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <>
      <section className="">
        <div className="relative text-start bg-pri pt-44 pb-28 ipad:py-36 ">
          <div className="container__limiter">
            {/* Heading */}
            <div className="">
              <div
                className=""
                data-aos="fade-left"
                data-aos-duration="500"                
              >
                <p className="section__title">Recent Projects</p>
              </div>
              <div className="">
                <div
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <p className="pt-4 text-white max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore dolorum sint repudiandae tenetur asperiores animi
                  </p>
                </div>
              </div>
            </div>

            {/* Recent portfolio */}
            <div className="flex flex-col gap-y-16 mini:flex-row mini:justify-between mini:gap-y-0 mini:gap-x-12 mt-24">
              {/* project 1 */}
              <div className="w-full mini:w-1/2">
                <div className=" bg-[#1c2222] group rounded-md mb-5">
                  <img
                    src={project1}
                    alt=""
                    className="scale-90 group-hover:scale-100 transition-transform"
                  />
                </div>
                <Link
                  to={"portfolio"}
                  className="text-pink-500  text-2xl font-outfit hover:text-pink-700"
                >
                  E-Food MarketPlace
                </Link>
                <p className="text-white">
                  A collection of various food vendors in one location
                </p>
              </div>

              {/* project 2 */}
              <div className="w-full mini:w-1/2">
                <div className=" bg-[#1c2222] group rounded-md mb-5">
                  <img
                    src={project1}
                    alt=""
                    className="scale-90 group-hover:scale-100 transition-transform"
                  />
                </div>
                <Link
                  to={"portfolio"}
                  className="text-pink-500  text-2xl font-outfit hover:text-pink-700"
                >
                  E-Food MarketPlace
                </Link>
                <p className="text-white">
                  A collection of various food vendors in one location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
