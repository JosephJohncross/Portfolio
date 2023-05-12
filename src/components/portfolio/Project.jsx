import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import project1 from "../../assets/images/project1.svg";
import { useImmerReducer } from "use-immer";

import BlockContent from "@sanity/block-content-to-react";

import imageUrlBuilder from "@sanity/image-url";
import createSanity from "../../client";
import { PortableText } from "@portabletext/react";
import { Tooltip } from "../common/Tooltip";

const builder = imageUrlBuilder(createSanity);
const urlFor = (source) => {
  return builder.image(source);
};

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "featureShow":
      draft.feature = !draft.feature;
      break;
    case "technologyShow":
      draft.technology = !draft.technology;
      break;
    case "aboutShow":
      draft.about = !draft.about;
      break;
    case "carousalShow":
      draft.carousal = !draft.carousal;
      break;
  }
};

const initialState = {
  feature: false,
  technology: false,
  about: false,
  carousal: false,
};

const Project = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  // const { id } = useParams();

  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  useEffect(() => {
    createSanity
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,          
         body,
         softwareDetails->[]{},
         mainImage{
          asset->{
            url
          },
        },
        "technologies": *[_type=='logo']{ 
          logo{
            asset->{
              _id,
              url
            },
          },
          name,
        }
       }`,
        { slug }
      )
      .then((data) => {
        console.log(data);
        setPostData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="relative text-start bg-sec pt-44 mini:pt-20 ">
      <div className="container__limiter">
        <p className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit">
          E-Commerce Project
        </p>
        <div className="mt-10">
          <img src={project1} alt="" className="w-full" />
        </div>
        {/* Brief description of project */}
        <div className="mini:flex justify-center max-w-3xl">
          <p className="mt-8 text-white font-nunito text-sm ipad:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            officiis autem sunt ratione in totam obcaecati culpa fugit deleniti
            error magni blanditiis, commodi vero suscipit enim pariatur hic,
            odit ea cumque a dicta fugiat exercitationem qui. Corrupti unde
            beatae veniam?
          </p>
        </div>

        {/* About project  */}
        <div className="pt-14">
          <div className="text-white font-nunito flex flex-col   ipad:flex-row ipad:gap-x-8 ipad:gap-y-0">
            <div className=" ipad:w-1/2">
              <h2 className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit hidden ipad:block">
                About project and approach
              </h2>
              <div className="flex justify-between items-center">
                <h2
                  className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit ipad:hidden"
                  onClick={() => {
                    dispatch({
                      type: "aboutShow",
                    });
                  }}
                >
                  About project and approach
                </h2>
                <img
                  src="https://img.icons8.com/ios-glyphs/41B362/30/plus-math.png"
                  alt="plus-math"
                  className="w-5 h-5 ipad:hidden"
                />
              </div>
              {/* Desktop */}
              <p className="pt-8 text-sm ipad:text-base hidden ipad:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, architecto quisquam! Itaque explicabo adipisci commodi
                distinctio deleniti! Numquam soluta et amet facilis voluptatem
                provident saepe! Similique harum provident officiis repellendus
                reiciendis cupiditate eligendi labore praesentium neque suscipit
                amet ex delectus tempore, est quidem, ad autem eos expedita
                libero vero animi cum necessitatibus nostrum sunt! Nulla magnam
                magni perspiciatis exercitationem aspernatur.
              </p>
              {/* Mobile */}
              {state.about && (
                <p className="pt-8 text-sm ipad:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, architecto quisquam! Itaque explicabo adipisci
                  commodi distinctio deleniti! Numquam soluta et amet facilis
                  voluptatem provident saepe! Similique harum provident officiis
                  repellendus reiciendis cupiditate eligendi labore praesentium
                  neque suscipit amet ex delectus tempore, est quidem, ad autem
                  eos expedita libero vero animi cum necessitatibus nostrum
                  sunt! Nulla magnam magni perspiciatis exercitationem
                  aspernatur.
                </p>
              )}
            </div>

            {/* Features */}
            <div className="ipad:w-1/2 pt-10 ipad:pt-0">
              <h2 className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit hidden ipad:block">
                Features
              </h2>
              <div className="flex justify-between items-center">
                <h2
                  className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit ipad:hidden"
                  onClick={() => {
                    dispatch({
                      type: "featureShow",
                    });
                  }}
                >
                  Features
                </h2>
                <img
                  src="https://img.icons8.com/ios-glyphs/41B362/30/plus-math.png"
                  alt="plus-math"
                  className="w-5 h-5 ipad:hidden"
                />
              </div>
              {/* Desktop */}
              <ul className="pt-8 ipad:flex flex-col space-y-1 text-sm ipad:text-base hidden">
                <li className="flex space-x-2">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                    alt="code-fork--v1"
                    className="w-5 h-5"
                  />
                  <span className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit tenetur inventore, exercitationem eveniet
                    reprehenderit accusantium consequatur officia voluptas
                    aliquid tempore!
                  </span>
                </li>
                <li className="flex space-x-2">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                    alt="code-fork--v1"
                    className="w-5 h-5"
                  />
                  <span className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit tenetur inventore, exercitationem eveniet
                    reprehenderit accusantium consequatur officia voluptas
                    aliquid tempore!
                  </span>
                </li>
                <li className="flex space-x-2">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                    alt="code-fork--v1"
                    className="w-5 h-5"
                  />
                  <span className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit tenetur inventore, exercitationem eveniet
                    reprehenderit accusantium consequatur officia voluptas
                    aliquid tempore!
                  </span>
                </li>
                <li className="flex space-x-2">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                    alt="code-fork--v1"
                    className="w-5 h-5"
                  />
                  <span className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit tenetur inventore, exercitationem eveniet
                    reprehenderit accusantium consequatur officia voluptas
                    aliquid tempore!
                  </span>
                </li>
              </ul>
              {/* Mobile */}
              {state.feature && (
                <ul className="pt-8 flex flex-col space-y-1 text-sm ipad:text-base">
                  <li className="flex space-x-2">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                      alt="code-fork--v1"
                      className="w-5 h-5"
                    />
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit tenetur inventore, exercitationem eveniet
                      reprehenderit accusantium consequatur officia voluptas
                      aliquid tempore!
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                      alt="code-fork--v1"
                      className="w-5 h-5"
                    />
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit tenetur inventore, exercitationem eveniet
                      reprehenderit accusantium consequatur officia voluptas
                      aliquid tempore!
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                      alt="code-fork--v1"
                      className="w-5 h-5"
                    />
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit tenetur inventore, exercitationem eveniet
                      reprehenderit accusantium consequatur officia voluptas
                      aliquid tempore!
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/41B362/48/code-fork--v1.png"
                      alt="code-fork--v1"
                      className="w-5 h-5"
                    />
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit tenetur inventore, exercitationem eveniet
                      reprehenderit accusantium consequatur officia voluptas
                      aliquid tempore!
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Project carousal */}
          <div className="mt-10">
            <div className="flex justify-between items-center">
              <h2
                className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit visible cursor-pointer ipad:hidden"
                onClick={() => {
                  dispatch({
                    type: "carousalShow",
                  });
                }}
              >
                Project Carousal
              </h2>
              <img
                src="https://img.icons8.com/ios-glyphs/41B362/30/plus-math.png"
                alt="plus-math"
                className="w-5 h-5 ipad:hidden"
              />
            </div>
            {/* Desktop */}
            <div className="py-10 ipad:flex justify-center hidden">
              <img src={project1} alt="" className="" />
            </div>
            {/* Mobile */}
            {state.carousal && (
              <div className="mt-10 ipad:flex justify-center ">
                <img src={project1} alt="" className="" />
              </div>
            )}
          </div>

          {/* Technologie used */}
          <div className="pt-10 pb-12 ipad:pt-16">
            <h2 className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit hidden ipad:block">
              Technology Stack
            </h2>
            <div className="flex justify-between items-center">
              <h2
                className="text-amber-500 font-medium text-xl ipad:text-2xl mini:text-3xl font-outfit visible cursor-pointer ipad:hidden"
                onClick={() => {
                  dispatch({
                    type: "technologyShow",
                  });
                }}
              >
                Technology Stack
              </h2>
              <img
                src="https://img.icons8.com/ios-glyphs/41B362/30/plus-math.png"
                alt="plus-math"
                className="w-5 h-5 ipad:hidden"
              />
            </div>
            <div className="text-pgreen mt-5 hidden ipad:block">
              <div className="ipad:grid grid-cols-1 ipad:grid-cols-2 ipad:gap-x-6 gap-y-4 ipad:gap-y-4 w-max p-4 rounded-md flex-col flex items-center">
                {postData.technologies.map((technology) => {
                  return (
                    <img
                      src={technology.logo.asset.url}
                      className="h-12 ipad:h-9"
                      key={technology.logo.asset.id}
                    />
                  );
                })}
              </div>
            </div>
            {state.technology && (
              <div className="text-pgreen mt-5">
                <div className="ipad:grid grid-cols-1 ipad:grid-cols-2 gap-y-4 ipad:gap-y-4 w-max p-4 rounded-md flex-col flex items-center">
                  {postData.technologies.map((technology) => {
                    return (
                      <img
                        src={technology.logo.asset.url}
                        className="h-12 ipad:h-9"
                        key={technology.logo.asset.id}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
