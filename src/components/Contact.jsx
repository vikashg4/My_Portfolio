import React, { useState, useEffect } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from '../assets/contact2.jpg'
import home1 from "../assets/mailbox2.gif";

const Contact = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    // Update the 'isMobile' state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="contact" 
      
      style={{
        backgroundColor: isMobile ? '#0093E9' : '#6cc4f5',
        backgroundImage: isMobile
          ? 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
          : 'linear-gradient(270deg, #6cc4f5 11%, #dcebe8 74%)',
      }}


      className="w-full   from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >


      <div className="row">



        <div className="col-md-6 col-lg-6 col-sm-12 align-items-center d-flex  border-0 shadow-none hide-on-mobile">
          {/* <div className='col-md-6 col-lg-6 col-sm-12 d-flex align-items-center border-0 shadow-none  '> */}
          <img src={home1} />{" "}
        </div>{" "}


        <div className="col-md-6  col-lg-6 col-sm-12  d-flex align-items-center border-0 shadow-none ">

          <div className="px-4 flex  font-normal flex-col justify-center items-center w-full h-full text-white">
            {/* Heading */}
            <p className="text-3xl font-bold inline border-b-4 border-[#fff]">
              Contact
            </p>
            {/* Description */}
            <p className="py-6 fw-bold">
              Submit the form below or send me an email -{" "}
              <span className="font-bold ">vikassingh9598@gmail.com</span>
            </p>

            {/* Form */}
            <div className="">
              <form action="https://formspree.io/f/xknlrqgy"
                method='post'
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="bg-gray-200 text-gray-950 p-2 w-full rounded-md active:border-[#0284c7] active:border-2"
                  data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="my-4 p-2 bg-gray-200 text-gray-950 w-full rounded-md active:border-[#0284c7] active:border-2"
                  data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
                />
                <textarea
                  name="message"
                  className="bg-gray-200 bg-grey p-2 w-full text-gray-950 rounded-md active:border-[#0284c7] active:border-2"
                  data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"
                  placeholder="Message"
                  rows="10"
                ></textarea>
                <div className="mt-4 mx">
                  <button
                    type='submit'
                    className="text-white fw-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0284c7] hover:border-[#0284c7] rounded-sm hover:text-[#3A1078] font-semibold"
                  >
                    Send Message
                    <span className="group-hover:translate-x-1 duration-300">
                      <IoSendSharp className="ml-4" />
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Contact;