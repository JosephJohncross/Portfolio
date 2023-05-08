import { useRef, useState } from "react";
import { CustomRoutes } from "./routes";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import MobileNav from "./layout/MobileNav";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { checkCurrentLocation } from "./utility";

function App() {
  const [mobilState, setMobileState] = useState(false);
  const mobileNav = useRef();
 

  const toggleMobileNav = () => {
    if (!mobilState) {
      // console.log("I was clicked")

      mobileNav.current.classList.add("mobile-show");
      mobileNav.current.classList.remove("translate-x-full");
      // mobileNav.current.classList.remove("hidden");
      setMobileState(true);
    } else {
      mobileNav.current.classList.remove("mobile-show");
      mobileNav.current.classList.add("translate-x-full");
      // mobileNav.current.classList.add("hidden");
      setMobileState(false);
    }
  };

  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          <div
            className={
              mobilState
                ? "h-screen overflow-hidden bg-pri"
                : "overflow-x-hidden ipad:overflow-visible bg-pri"
            }
          >
            <div
              className="relative translate-x-full transition-transform duration-700 z-50"
              ref={mobileNav}
            >
              <MobileNav toggleMobileNav={toggleMobileNav} />
            </div>
            <div className="fixed ipad:sticky ipad:top-0 w-full z-40">
              <Header toggleMobileNav={toggleMobileNav} />
            </div>
            <div className="">
              <Routes>{...CustomRoutes()}</Routes>
            </div>
            {checkCurrentLocation(window.location.pathname) ? <Footer /> : <></>}
          </div>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
