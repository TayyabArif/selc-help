// import React, { useState } from 'react'
// import { useRouter } from 'next/router'

// const Header = () => {
//  const router = useRouter()
//   return (
//     <header className='w-full lg:block hidden'>
//     <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
//         <div class="flex justify-between items-center mx-auto">
//             <p  class="flex items-center cursor-pointer">
//                 <img src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png" class="mr-3 h-6 sm:h-9" alt="Logo" onClick={() => router.push('/')}/>
//             </p>
//             <div class="relative flex items-center lg:order-2">
//                 <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login Help</a>
//                 <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">MS Login Help</a>
//                 <a href="#" class="text-primary dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Contact</a>
//             </div>
//         </div>
//     </nav>
// </header>
//   )
// }

// export default Header

import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
// import ButtonOutline from "../misc/ButtonOutline.";
// import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white transition-all shadow-md" +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image src="/selc-logo.png" alt="selc logo" width={170} height={170} />
          </div>
          <ul className="hidden md:flex col-start-4 col-end-8 text-gray-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="cardsSection1"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("cardsSection1");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "cardsSection1"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a ")
              }
            >
              Help
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="target_faq"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("target_faq");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "target_faq"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              FAQ
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="https://www.myselcedu.com/login/" target="_blank" rel="noopener noreferrer">
            <button
              className={
                "py-3 lg:py-4 px-8 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
              }
            >
              Go To Student Portal
            </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
