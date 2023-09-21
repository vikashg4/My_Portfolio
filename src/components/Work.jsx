import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works } from "../data/Static";
import backgroundImage from '../assets/whitepattern.jpg'
import ProjectImage from '../assets/Yll.png'

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="work" className="w-full  from-[#21073C] to-[#3A1078] py-32"
      style={{
        // backgroundImage: `url(${backgroundImage})`, // Set the background image
        // backgroundSize: 'cover', // Optional: Adjust the background size as needed
        background: 'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)',

      }}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full " style={{color:'black'}}>
        <div>
          <h1 className="text-3xl font-bold inline border-b-4 border-[#708090]">Recent Works</h1>
          <p className="text-xl py-6">During my experience as a self-taught developer, I have created many projects and shared them on LinkedIn and GitHub. I am always on the lookout for new and challenging projects to work on.</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 mt-7 ">
          {/* Map over the works array and render each work */}
          {works.map((work) => (
         
            <div class="flip-card mt-4">
              {" "}
              <div class="flip-card-inner shadow border-0 rounded-3">
                {" "}
                <div class="flip-card-front bg-white  p-1 rounded-3">
                  {" "}
                  <img
                    src={work.imgUrl === '' ? ProjectImage : work.imgUrl}
                    alt="work"
                    className="w-full h-36 md:h-48 object-contain"
                  />
                  {/* Work details */}

                  <h3 className="text-lg text-black md:text-xl my-1 font-semibold">
                    {work.title}
                  </h3>
                  {/* Technologies details */}

                  <p className="flex flex-wrap gap-1 flex-row items-center justify-start text-xs md:text-sm ">
                    {work.tech.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-2 py-1 bg-slate-300 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </p>
                </div>{" "}
                <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3">
                  {" "}
                  <div className="mb-5">
                    {" "}

                    <a
                      href={work.LiveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-200 rounded-lg overflow-hidden"
                      key={work.title} data-aos="fade-up" data-aos-duration={work.duration} data-aos-easing="linear"
                    >

                    </a>

                    <h3 className="text-lg text-black md:text-xl mb-2 md:mb-3 font-semibold">
                      {work.title}
                    </h3>

                    {/* Work details */}
                    <div className="w-full p-5 text-black">

                      {/* Technologies */}
                      <div className="row g-2">

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          <a

                            href={work.GithubUrl}
                            // href="https://github.com/your-github-repo-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                          <a
                            href={work.LiveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </button>
                      </div>
                    </div>

                  </div>{" "}
                  {/* <a href="#" className="fs-5">                    Read more <Icon icon="ooui:arrow-next-ltr" />                  </a> */}{" "}
                </div>{" "}
              </div>{" "}
            </div>



          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;