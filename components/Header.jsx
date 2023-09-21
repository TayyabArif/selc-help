import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';


const Header = ({visitCount, isArrive}) => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const { stepCount, incrementStep, handleSkip } = useTour();

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

  const handleNext = (value) => {
    incrementStep();
    if (value === "language") {
      const cardsSection = document.getElementById('about');
      if (cardsSection) {
        cardsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      if (stepCount > 2) {
        const cardsSection = document.getElementById('target_faq');
        if (cardsSection) {
          cardsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }
  }


  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white transition-all shadow-md" +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <a href="#" className="flex col-start-1 col-end-2 items-center">
            <Image src="/selc-logo.png" alt="selc logo" width={170} height={170} className="md:w-full w-1/2"/>
          </a>
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
          <div className="flex items-center gap-10 md:col-start-11 md:col-end-12">
            <div className="flex relative">
              <div className="md:col-start-11 md:col-end-12 font-medium flex justify-end items-center bg-orange-500 hover:bg-primary rounded-lg py-1.5 lg:py-1.5 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="md:w-6 md:h-6 w-4 h-4 md:mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <select value={selectedLanguage} onChange={handleChangeLanguage}  className="bg-orange-500 hover:bg-primary rounded-lg text-white md:text-base text-xs px-2 py-1 lg:py-1">
                  <option value="en" className="text-white">English</option>
                  <option value="por">Portuguese</option>
                  <option value="kor">Korean</option>
                  <option value="jap">Japanese</option>
                  <option value="span">Spanish</option>
                </select>
              </div>
              {isArrive && visitCount < 5 && stepCount === 1 &&
                <div class=" bg-orange-400 bg-opacity-100 text-white p-8 rounded-lg shadow-lg absolute w-[350px] top-[140%] md:-left-[100%] -left-[10%] z-10 card-animation">
                  <div className="triangle-top"></div>
                  <h2 class="text-xl font-semibold mb-2">1/4</h2>
                  <h2 class="text-xl font-semibold mb-2">Use different languages</h2>
                  <p class="mb-6">Change language according to your choice</p>
                  <div class="flex justify-end gap-5 mt-4">
                    <button class="px-4 py-2 hover:bg-orange-500 text-base font-bold text-white rounded" onClick={handleSkip}>Skip Tour</button>
                    <button class="px-4 py-0 bg-primary text-white rounded focus:outline-none" onClick={() => handleNext("language")}>Next</button>
                  </div>
                </div>
              }

            </div>
            <div className="hidden md:flex relative" id="portal">
              <div className="md:col-start-9 md:col-end-10 font-medium flex justify-end items-center">
                <Link href="https://www.myselcedu.com/login/" target="_blank" rel="noopener noreferrer">
                <button
                  className={
                    "py-2.5 lg:py-2 px-6 text-white font-semibold md:text-base text-xs rounded-lg bg-orange-500 hover:shadow-primary-md hover:bg-primary transition-all outline-none "
                  }
                >
                  {translations.header.portal}
                </button>
                </Link>
              </div>
              {visitCount < 4 && stepCount === 3 &&
                <div class="bg-orange-400 bg-opacity-100 text-white p-8 rounded-lg shadow-lg absolute w-[350px] top-[140%] md:-left-[80%] -left-[100%] card-animation3">
                  <div className="triangle-top"></div>
                  <h2 class="text-xl font-semibold mb-2">3/4</h2>
                  <h2 class="text-xl font-semibold mb-2">Visit SELC portal</h2>
                  <p class="mb-6">Visit the student portal once you get knowledge</p>
                  <div class="flex justify-end gap-5 mt-4">
                    <button class="px-4 py-2 hover:bg-orange-500 text-base font-bold text-white rounded" onClick={handleSkip}>Skip Tour</button>
                    <button class="px-4 py-0 bg-primary text-white rounded focus:outline-none" onClick={() => handleNext("portal")}>Next</button>
                  </div>
                </div>
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
