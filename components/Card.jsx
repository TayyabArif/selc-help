import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import { useLanguage } from "@/contexts/LanguageContext";

const Card = ({bg, heading, image, redirect, setIsLoginClick, value, isNotLikeVideo, setIsNotLikeVideo }) => {
  const router = useRouter();
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);

  return (
    <div
    className={`block filter ${isNotLikeVideo && value === 'contact' ? 'brightness-100 bounce2' : isNotLikeVideo && value !== 'contact'  ? 'brightness-50': '' } max-w-sm p-6 ${bg} border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative group transition-transform transform hover:scale-110 lg:min-w-[20%] w-[90%] lg:h-[220px] cursor-pointer`}
    onClick={() => {
      setIsLoginClick(value);
      setIsNotLikeVideo(false);
      const cardsSection = document.getElementById('videoButton');
      if (cardsSection) {
        cardsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }}
  >
    <div className="text-center h-full">
      <Image src={image} alt="card iamge" width={50} height={50} className="mx-auto mb-5 h-[40%]" />
      <p className="flex flex-col justify-center bottom-3 right-6 text-white text-[18px] font-bold mb-2 h-[30%]">
        {heading}
      </p>
      <p className="flex flex-col justify-center bottom-3 right-6 text-white text-[14px] font-bold mb-6 h-[30%]">
        {translations.coopCards.learn}
      </p>
    </div>
    <div className="transition-transform transform origin-right opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute right-6 top-[45%] -translate-y-1/2">
    <Image src="/rightTag.svg" alt="arrow" width={24} height={24} />
    </div>
  </div>
  )
}

export default Card
