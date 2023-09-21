import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import backgroundImage from "../assets/home3.jpg"; // Import your background image here
import home1 from "../assets/home11.gif";
const Home = () => {
  const backgroundStyles = {
    // backgroundImage: `url(${backgroundImage})`, // Use the imported background image
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'
  };

  return (
    <div
      name="home"
      style={{    background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'
    }}
      className=" w-full h-screen px-5 from-[#21073C] to-[#3A1078] d-flex"
    >
      <div className="row">
        {" "}
        <div className="col-md-6  col-lg-6 col-sm-12  d-flex align-items-center border-0 shadow-none ">
          {" "}
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            {" "}
            <p className="text-gray-70 text-lg">Hi, my name is</p>{" "}
            <h1 className="text-4xl sm:text-7xl font-bold text-[#0284c7]">
              {" "}
              Vikash Singh{" "}
            </h1>{" "}
            <div>
              {" "}
              <h2 className="text-2xl sm:text-4xl font-bold text-black-50 pt-2 flex">
                {" "}
                {/* <span className="mr-2">I am</span>{" "} */}
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Front End Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("React developer")
                      .start();
                  }}
                />{" "}
              </h2>{" "}
            </div>{" "}
            <p className="text-muted py-4 leading-8">
              {" "}
              With a passion for creating captivating user experiences, I
              specialize in developing mobile applications using Flutter while
              incorporating appealing design principles.{" "}
            </p>{" "}
            {/* <div>
              {" "}
              <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#228B22] hover:border-[#228B22] rounded-sm hover:text-[#3A1078] font-semibold">
                {" "}
                View Work{" "}
                <span className="group-hover:translate-x-1 duration-300">
                  {" "}
                  <HiArrowNarrowRight className="ml-4" />{" "}
                </span>{" "}
              </button>{" "}
            </div>{" "} */}
          </div>{" "}
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 align-items-center d-flex  border-0 shadow-none hide-on-mobile">
          {/* <div className='col-md-6 col-lg-6 col-sm-12 d-flex align-items-center border-0 shadow-none  '> */}
          <img src={home1} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
