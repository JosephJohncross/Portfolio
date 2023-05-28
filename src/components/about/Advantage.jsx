import React, { useEffect } from "react";
import Aos from "aos";
import profile from "../../assets/images/profile.jpg";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="">
      <div className="relative text-start bg-sec pt-44 pb-28 ipad:py-36 ">
        <div className="container__limiter flex-col flex ipad:flex-row font-poppins ipad:gap-x-16">
          {/* left section */}
          <div className="ipad:w-1/2 z-10 flex justify-center w-full">
            <div
              className=""
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="bg-[#1c2222] ipad:min-w-max p-6 rounded-lg relative">
                <div className="">
                  <div
                    className=""
                    data-aos="zoom-out"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="500"
                    data-aos-delay="500"
                  >
                    <img src={profile} alt="" className="w-96 rounded-md" />
                  </div>
                </div>
                {/* <div className="  bg-gradient-to-r from-white/25 to-transparent  rounded-md shadow-md pl-[0.17rem] pt-[0.17rem] pb-[0.17rem]"> */}
                <div className="absolute bottom-0 left-0 -translate-x-10 translate-y-4 py-5 px-10 rounded-md bg-gradient-to-r from-amber-500 to-black/20 backdrop:blur-lg font-nunito">
                  <p className="font-bold text-white">Years of Experience</p>
                  <p className="text-center text-3xl text-white font-semibold">
                    3+
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="w-full my-10 ipad:my-0 flex">
            <div className="">
              <div
                className=""
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <p className="section__title">My Advantage</p>
              </div>
              <div
                className=""
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <p className="pt-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore dolorum sint repudiandae tenetur asperiores animi
                  nostrum repellendus nihil atque facilis deleniti molestiae
                  aspernatur porro, numquam, sunt fugit natus, est voluptates.
                </p>
              </div>

              {/* Advantage cards */}
              <div className="pt-10 flex gap-5 flex-wrap">
                
                <AdvantageCard
                  gradient={"bg-gradient-to-b from-amber-600 to-transparent"}
                  content={"Design Patterns"}
                  textColor={"text-amber-600"}
                  delay={"200"}
                />
                <AdvantageCard
                  gradient={"bg-gradient-to-b from-lime-600 to-transparent"}
                  content={"DSA"}
                  textColor={"text-lime-600"}
                  delay={"300"}
                />
                <AdvantageCard
                  gradient={"bg-gradient-to-b from-cyan-600 to-transparent"}
                  content={"Application Architecture"}
                  textColor={"text-cyan-600"}
                  delay={"400"}
                />
                <AdvantageCard
                  gradient={"bg-gradient-to-b from-fuchsia-600 to-transparent"}
                  content={"Adaptability"}
                  textColor={"text-fuchsia-600"}
                  delay={"500"}
                />
                <AdvantageCard
                  gradient={"bg-gradient-to-b from-pink-600 to-transparent"}
                  content={"TeamWork"}
                  textColor={"text-pink-600"}
                  delay={"600"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
