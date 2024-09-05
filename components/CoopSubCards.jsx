import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import { useLanguage } from "@/contexts/LanguageContext";

const CoopSubCards = ({bg, heading, image, redirect, value, isNotLikeVideo , setIsCoopMainClick, isCoopMainClick}) => {
  const router = useRouter();
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);

  return (
    <div
    className={`block filter brightness-100 max-w-sm p-6 ${bg} border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative group transition-transform transform hover:scale-110 lg:min-w-[20%] w-[90%] lg:h-[220px] cursor-pointer`}
    onClick={() => 
        router.push(redirect)
    }
  >
    <div className="text-center h-full">
      <Image src={image} alt="card iamge" width={50} height={50} className="mx-auto mb-5 h-[40%]" />
      <p className="flex flex-col justify-center bottom-3 right-6 text-white text-[18px] font-bold mb-2 h-[30%]">
        {heading}
      </p>
      <p className="flex flex-col justify-center bottom-3 right-6 text-white text-[14px] font-bold mb-6 h-[30%]">
        {isCoopMainClick ? translations?.coopCards?.learnLess : translations?.coopCards?.learn}
      </p>
    </div>
    <div className="transition-transform transform origin-right opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute right-6 top-[45%] -translate-y-1/2">
    <Image src="/rightTag.svg" alt="arrow" width={24} height={24} />
    </div>
  </div>
  )
}

export default CoopSubCards
