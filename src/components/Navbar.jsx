import React, { useEffect, useState } from "react";
import Logo from "../assets/Hi2.gif";
import { FaTimes, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { HiArrowSmUp, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
   const [nav, setNav] = useState(false);  
  const [backToTop, setBackToTop] = useState(false);  
  const [showShadowNav, setShowShadowNav] = useState(false);
  useEffect(() => {
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);  
        setShowShadowNav(true);  
      } else {
        setBackToTop(false);  
        setShowShadowNav(false);  
      }
    };

    window.addEventListener("scroll", handleScroll);

     return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 
  const handleClick = () => {
    setNav(!nav);  
    setBackToTop(false);  
  };

  return (
    <div className={!showShadowNav ? 'fixed w-full h-[80px] flex justify-between items-center px-4  from-[#21073C] to-[#66AECC]   z-20':'fixed w-full h-[80px] flex justify-between items-center px-4 bg-white from-[#21073C] to-[#66AECC] text-sky-900 z-20 shadow-2xl'}
    
    style={{
      backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #80D0C7 0%, #0093E9  100%)',
height:'auto'
    }} 
    >
      <div>
        <img src={Logo} alt="logo"style={{ width: "80px" ,height:'80px'  }}  />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {/* Added comments for each navigation item */}
        <li className="    hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color:  "white" }}>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
       
        <li className="  hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color: "white"}}>
          <Link to='skill' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="  hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color: "white"}}>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className="   hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color: "white"}}>
          <Link to='experience' smooth={true} duration={500}>Experience</Link>
        </li>
        <li className="   hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color: "white"}}>
          <Link to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className="  hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]" style={{fontWeight:600 ,color: "white" }}>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <BsGridFill /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={`${
  !nav
    ? "hidden"
    : "absolute top-0 left-0 w-full shadow-sm bg-[#fff] dark:bg-[#21073C]  flex flex-col justify-center items-center transition ease-in-out duration-300 delay-700"
}`} style={{height:''}}>
        {/* Added comments for mobile menu */}
        <div>
          <img src={Logo} alt="logo" style={{ marginTop:5 ,width: "100px" ,height:'100px' }}  />
        </div>
        <ul
          className='w-full  flex flex-col justify-center items-center'
        >
          {/* Added comments for each mobile menu item */}
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
          </li>
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='skill' smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='experience' smooth={true} duration={500}>Experience</Link>
          </li>
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
          </li>
          <li className="text-black py-2 text-2xl hover:text-[#2F4F4F] hover:translate-y-1 hover:duration-200 active:text-[#2F4F4F]">
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        {/* <div className="mt-10">
          <p> Welcome to ur Website</p>
        </div> */}
      </div>

      {backToTop && (
        <div className="fixed flex-col top-[90%] right-2 md:right-6 animate-bounce bg-white text-[#66AECC] rounded-full">
          <button onClick={scrollUp} className="p-3">
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="https://www.linkedin.com/in/vikash-singh-0708961a3/"
              className="flex justify-between items-center w-full text-[#66AECC]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="https://github.com/vikashg4?tab=repositories"
              className="flex justify-between items-center w-full text-[#66AECC]"
            >
              Github <FaGithub size={30} />
            </a>
          </li>


          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="mailto:vikassingh9598@gmail.com" 
              className="flex justify-between items-center w-full text-[#66AECC]"
            >
              Email <HiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;