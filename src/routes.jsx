import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

export const CustomRoutes = () => {
  return [
    <Route path="/" element={<Homepage />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/projects" element={<Portfolio/>}/>,
  ];
};
