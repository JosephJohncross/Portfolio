import React, { useEffect } from "react";
import Aos from "aos";
import Button from "../common/Button";
import heroImg from "../../assets/images/heroimg.png"
import mask1 from "../../assets/images/mask.svg"

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="h-screen">
      <div className="text-start bg-pri pt-44 ipad:pt-36 ">
        <div className="container__limiter flex flex-col ipad:flex-row items-center ipad:space-x-7 gap-y-12 ipad:gap-y-0 z-10 bg-transparent">
          {/* Desktop left */}
          <div className="ipad:block ipad:w-2/3 z-10 font-outfit">
            <p className="text-6xl mb-4 text-amber-500">Hi,</p>
            <div data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center mb-6 mini:space-x-10">
                <p className="text-7xl text-white font-semibold"><span className="ipad:hidden">I am </span>Joseph <span className="hidden ipad:inline-block">Here</span></p>
                <div
                  className=""
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="500"
                  data-aos-delay="500"
                >
                  <img
                    src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                    className="w-20 mini:-translate-y-2"
                  />
                </div>
              </div>
            </div>
            <div className="mb-14">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <p className="capitalize mb-3 text-2xl text-pgreen font-semibold">
                  Full stack web developer
                </p>
                <p className="max-w-lg capitalize mb-3 text-base text-white ">
                  I build innovative, high-quality solutions from front to back,
                  driven by a passion for technology and a commitment to
                  continuous learning
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <Button content={"Hire Me"} shade={"bordered-white"}></Button>
            </div>
          </div>

          {/* Desktop right */}
          <div className="hidden ipad:flex ipad:w-1/3 w-full justify-center ipad:justify-end order-1 ipad:order-2 my-10 ipad:my-0"></div>
        </div>

        <div className="absolute container__limiter flex flex-col -z-1 ipad:flex-row items-center ipad:space-x-7 gap-y-12 ipad:gap-y-0 top-0 left-0 bottom-0 right-0">
          <div className="ipad:block ipad:w-2/3"></div> 
          <div className="hidden ipad:flex ipad:w-1/3 w-full justify-center ipad:justify-end order-1 ipad:order-2 my-10 ipad:my-0 brightness-50 ">
            <img src={heroImg} className="animate-scale"/>
          </div>
        </div>
        {/* <img src={mask1} className="w-full mt-16"/> */}
      </div>
    </section>
  );
};

export default Hero;
