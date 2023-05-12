import React from "react";
import { Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Projects from "./components/portfolio/Projects";
import Project from "./components/portfolio/Project";
import Blog from "./components/blog/Blog";

export const CustomRoutes = () => {
  return [
    <Route path="/" element={<Homepage />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/projects" element={<Projects/>}/>,
    <Route path="/projects/:slug" element={<Project/>}/>,
    <Route path="/blog" element={<Blog/>}/>,
  ];
};
