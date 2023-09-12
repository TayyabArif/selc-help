import React, { useMemo } from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "@/utlis/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = ({
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);
  const htmlContent = { __html: translations.hero.welcomeMessage };

  return (
    <div
      className="pt-10 mx-auto bg-gray-50"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 px-8 xl:px-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              {/* <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 leading-normal">
                Welcome to <strong>SELC</strong> student Help Desk.
              </h1> */}
              <h1
                  className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 leading-normal"
                  dangerouslySetInnerHTML={htmlContent}
                />
              <p className="text-gray-500 mt-4 mb-6">
              {translations.hero.desc}
              </p>
              <LinkScroll
              activeClass="active"
              to="cardsSection1"
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
            </div>
            <div className="flex w-full">
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
            </div>
          </motion.div>
      </ScrollAnimationWrapper>

      <div className="relative w-full md:flex hidden py-5 bg-gray-100">
      <div className="overflow-hidden w-full">
      <div className="animate-marquee whitespace-nowrap text-gray-600 w-full text-primary font-bold">
        Your running headline text goes here. Make it as long as you want!
        Your running headline text goes here. Make it as long as you want!
      </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
