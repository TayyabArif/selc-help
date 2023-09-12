import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);

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
          <ul className="hidden md:flex col-start-4 col-end-6 text-gray-500  items-center">
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
              {translations.header.home}
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
               {translations.header.help}
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
              {translations.header.faq}
            </LinkScroll>
          </ul>
          <div className="flex items-center gap-10 col-start-11 col-end-12">
            <div className="col-start-11 col-end-12 font-medium flex justify-end items-center bg-orange-500 hover:bg-primary rounded-lg py-1.5 lg:py-1.5 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <select value={selectedLanguage} onChange={handleChangeLanguage}  className="bg-orange-500 hover:bg-primary rounded-lg text-white px-2 py-1 lg:py-1">
                <option value="en" className="text-white">English</option>
                <option value="por">Portuguese</option>
                <option value="kor">Korean</option>
                <option value="jap">Japanese</option>
              </select>
            </div>
            <div className="col-start-9 col-end-10 font-medium flex justify-end items-center">
              <Link href="https://www.myselcedu.com/login/" target="_blank" rel="noopener noreferrer">
              <button
                className={
                  "py-2 lg:py-2 px-6 text-white font-semibold rounded-lg bg-orange-500 hover:shadow-primary-md hover:bg-primary transition-all outline-none "
                }
              >
                {translations.header.portal}
              </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
