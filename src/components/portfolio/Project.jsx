import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import project1 from "../../assets/images/project1.svg";

import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import createSanity from "../../client";
import { PortableText } from "@portabletext/react";
import { Tooltip } from "../common/Tooltip";

const builder = imageUrlBuilder(createSanity);
const urlFor = (source) => {
  return builder.image(source);
};

const Project = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const { id } = useParams();

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
        <p className="text-amber-500 text-xl ipad:text-2xl mini:text-3xl font-outfit">
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
          <div className="text-white font-nunito flex flex-col gap-y-5 ipad:flex-row ipad:gap-x-8 ipad:gap-y-0">
            <div className=" ipad:w-1/2">
              <h2 className="text-amber-500 text-xl ipad:text-2xl mini:text-3xl font-outfit">
                About project and approach
              </h2>
              <p className="pt-8 text-sm ipad:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, architecto quisquam! Itaque explicabo adipisci commodi
                distinctio deleniti! Numquam soluta et amet facilis voluptatem
                provident saepe! Similique harum provident officiis repellendus
                reiciendis cupiditate eligendi labore praesentium neque suscipit
                amet ex delectus tempore, est quidem, ad autem eos expedita
                libero vero animi cum necessitatibus nostrum sunt! Nulla magnam
                magni perspiciatis exercitationem aspernatur.
              </p>
            </div>

            {/* Features */}
            <div className="ipad:w-1/2">
              <h2 className="text-amber-500 text-xl ipad:text-2xl mini:text-3xl font-outfit">
                Features
              </h2>
              <ul className="pt-2 flex flex-col space-y-1 text-sm ipad:text-base">
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
            </div>
          </div>

          {/* Project carousal */}
          <div className="mt-10 flex justify-center">
            <img src={project1} alt="" className="" />
          </div>

          {/* Technologie used */}
          <div className="pt-12 pb-12">
            <h2 className="text-amber-500 text-xl ipad:text-2xl mini:text-3xl font-outfit">
              Technology Stack
            </h2>
            <div className="text-pgreen mt-5 md:block justify-center">
              <div className="bg-gradient-to-r from-black/5 to-black/25 grid grid-cols-1 ipad:grid-cols-2 gap-y-4 ipad:gap-y-4 w-max p-4 rounded-md">
                {postData.technologies.map((technology) => {
                  return (
                    <img
                      src={technology.logo.asset.url}
                      className="h-7 ipad:h-9"
                      key={technology.logo.asset.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

// mainImage{
//     asset->{
//       _id,
//       url
//      }
//    },

{
  /* <BlockContent
          blocks={postData.body}
          projectId={createSanity.projectId}
          dataset={createSanity.dataset}

        /> */
}

{
  /* <div className="text-white">
      <div>
        <h2>{postData.title}</h2>
        <div>
          <img src={postData.mainImage.asset.url} alt="Author is Kap" />
          <h4>{postData.name}</h4>
        </div>
      </div>
      <div>
       
        <div className="text-white">
          <PortableText value={postData} />
        </div>
      </div>
    </div> */
}
