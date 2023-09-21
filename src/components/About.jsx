import React, { useEffect } from "react";
import pic from "../assets/pic1.jpg";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/Home2.jpg";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div
      name="about"
      className="w-full  py-32 from-[#21073C] to-[#3A1078] text-black-800 dark:bg-[#21073C] "
      style={{
        background: 'linear-gradient(to top, #ace0f9  0%, #fff1eb 100%)'
        // height:'100vh'
      }}
    >
      <div className="flex px-2 flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-black font-bold inline border-b-4 border-[#7393B3]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            <img
              src={pic}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2 about-img"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold pb-2 text-[#000]">
              Hello Clint, it's a pleasure to meet you
            </p>
            <p className="text-sm leading-7">
              Hello, I'm Vikash Singh from Lucknow, India. I graduated in
              Computer Science and Engineering in 2020. I'm a Front-end
              Developer and UI/UX designer. I'm passionate about making
              user-friendly and visually pleasing websites. I'm skilled in
              JavaScript, Java, and C. I love working with modern web
              technologies like React.js. I'm always learning and seeking new
              challenges to create innovative solutions. I believe in the
              importance of design and functionality in web development. I'm
              excited about the world of Web Technologies and Product
              Development.
            </p>
            <div className="mt-4">
              <button
                onClick={handleDownload}
                className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fff] hover:border-[#89CFF0] rounded-sm hover:text-[#89CFF0] font-semibold"
              >
                Download resume{" "}
                <span className="group-hover:translate-y-1 duration-300">
                  <BsDownload className="ml-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
