import React, { useMemo } from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "@/utlis/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';

const Hero = ({visitCount}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);
  const htmlContent = { __html: translations.hero.welcomeMessage };
  const { stepCount, incrementStep, handleSkip } = useTour();
  const handleNext = () => {
    if(window.innerWidth < 768) {
      incrementStep(2);
      const cardsSection = document.getElementById('target_faq');
      if (cardsSection) {
        cardsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    else {
      incrementStep(3);
      const cardsSection = document.getElementById('cardsSection');
      if (cardsSection) {
        cardsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }
  const [iframeHeight, setIframeHeight] = useState('100%');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIframeHeight('100%');
      } else {
        setIframeHeight('200%');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="pt-10 bg-gray-50"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row  grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 px-8 xl:px-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1
                  className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 leading-normal"
                  dangerouslySetInnerHTML={htmlContent}
                />
              <p className="text-gray-500 mt-4 mb-6"  id="about1">
              {translations.hero.desc}
              </p>
              <div className="relative flex">
              <LinkScroll
              activeClass="active"
              to="cardsSection"
              spy={true}
              smooth={true}
              duration={1000}
            >
               <button
              className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md hover:bg-primary transition-all outline-none "
              }
            >
              {translations.hero.button}
            </button>
              </LinkScroll>
              {visitCount < 4  && stepCount === 2 &&
                <div class="bg-orange-400 bg-opacity-100 text-white p-8 rounded-lg shadow-lg absolute md:w-[350px] w-[250px] md:-top-[100%] top-[130%] md:left-[110%] left-[0%] z-10 card-animation1">
                  <div className={window.innerWidth < 768 ? 'triangle-top' : 'triangle-left'}></div>
                 <h2 class="text-xl font-semibold mb-2">{window.innerWidth < 768 ? '2/3' : '2/4'}</h2>
                  <h2 class="md:text-xl text-base font-semibold mb-2">Check our help desk</h2>
                  <p class="md:text-base text-sm mb-6">Get your queries done in seconds</p>
                  <div class="flex justify-end gap-5 mt-4">
                    <button class="px-4 py-2 hover:bg-orange-500 text-base font-bold text-white rounded" onClick={handleSkip}>Skip Tour</button>
                    <button class="px-4 py-0 bg-primary text-white rounded focus:outline-none" onClick={handleNext}>Next</button>
                  </div>
                </div>
              }
              </div>
            </div>
            {/* <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <iframe
                  width="100%"
                  height={iframeHeight}
                  src="https://www.youtube.com/embed/RbLwxERCTNM"
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>

      <div className="relative w-full md:flex hidden py-5 bg-gray-100 2xl:mt-[10%] mt-[15%]">
      <div className="overflow-hidden w-full">
      <div className="animate-marquee whitespace-nowrap text-gray-600 w-full text-primary font-bold">
        {translations.hero.banner}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
