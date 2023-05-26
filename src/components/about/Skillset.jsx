import React from "react";

const Skillset = () => {
  return (
    <div className="relative text-start pt-32 mini:pt-20 ">
      <div className="container__limiter">
        <div className="flex flex-col text-center">
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay=""
          >
            <p className="section__title">Technology stacks</p>
          </div>
        </div>
        <div className="grid grid-col1 mini:grid-cols-2 gap-6">
          <div className="pt-8 flex flex-col items-center">
            <p className="text-pgreen font-outfit font-semibold text-xl">
              .NET
            </p>

            <div className="mt-5 flex gap-5 mini:gap-12 flex-wrap grid-cols-3">
              <div data-skill="ASP.NET Core" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="TypeScript" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  className=""
                />
              </div>
              <div data-skill="ASP.NET Core" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="ASP.NET Core" class="skill bg-white/10">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                  className="rounded-full"
                />
              </div>              
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center">
            <p className="text-pgreen font-outfit font-semibold text-xl">
              Python
            </p>
            <div className="mt-5 flex gap-5 mini:gap-12 flex-wrap grid-cols-3">
              <div data-skill="ASP.NET Core" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="ASP.NET Core" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="ASP.NET Core" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="TypeScript" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="rounded-full"
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  className=""
                />
              </div>
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  className=""
                />
              </div>   
              <div data-skill="C#" class="skill">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                  className="rounded-full"
                />
              </div>                         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
