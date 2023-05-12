import React, { useEffect, useState } from "react";
import Hero from "./Hero";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
        <Hero></Hero>
      )}
    </>
  );
};

export default Homepage;
