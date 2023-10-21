import Image from "next/image";
import React, { useState } from "react";
import VideoModal from "./VideoModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';


const LoginGuideCard = ({data, setIsNotLikeVideo, setIsLoginClick, visitCount}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);
  const { stepCount, incrementStep, handleSkip } = useTour();
  const handleNext = () => {
    incrementStep();
    const cardsSection = document.getElementById('target_faq');
    if (cardsSection) {
      cardsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div class=" md:w-[370px] w-full bg-white border border-gray-200 rounded-lg shadow-lg h-full">
      <a href="#" className="h-[50%]">
        <img src={data?.image} alt="guide" className="lg:h-[250px] h-[300px] w-full rounded-tl-lg rounded-tr-lg "/>
      </a>
      <div class="p-5 h-[50%]">
        <div className="h-[80px] text-center flex justify-center items-center">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 my-5">
            {data?.heading}
          </h5>
        </div>
        <div className="relative flex w-full justify-center h-[25%]" id="watchButton">
          <button
            onClick={openModal}
            class={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-center text-white bg-branding rounded-lg focus:ring-4 focus:outline-none h-[20%] cursor-pointer ${!data.video && !data.doc ? "opacity-50": ""}`}
            disabled={!data.video && !data.doc}
          >
            {translations.portalCards.watchButton}
            <Image src="/arrowRight.svg" alt="arrowRight" width={14} height={14} className="ml-2"/>
          </button>
          {visitCount < 4  && stepCount === 4 &&
                <div class="bg-orange-400 bg-opacity-100 text-white p-8 rounded-lg shadow-lg absolute lg:w-[350px] md:w-[280px] w-[250px] md:-top-[100%] top-[200%] md:left-[80%] -left-[10%] z-10 card-animation1">
                  <div className={window.innerWidth < 768 ? 'triangle-top' : 'triangle-left'}></div>
                 <h2 class="text-xl font-semibold mb-2">
                  {window.innerWidth < 768 ? '3/3' : '4/4'}
                  </h2>
                  <h2 class="md:text-xl text-base font-semibold mb-2">How video help you?</h2>
                  <p class="md:text-base text-sm mb-6">Click on watch video for every step and you'll get a video guide how to use portal</p>
                  <div class="flex justify-end gap-5 mt-4">
                    <button class="px-4 py-2 bg-primary hover:bg-orange-500 text-base font-bold text-white rounded" onClick={handleSkip}>Finish</button>
                  </div>
                </div>
              }
        </div>
        <VideoModal isOpen={modalOpen} onClose={closeModal} video = {data.video} redirect={data?.redirect} text={data.text} setIsNotLikeVideo={setIsNotLikeVideo} doc = {data.doc} setIsLoginClick={setIsLoginClick} />
        {/* <div id="video_modal"></div> */}
      </div>
    </div>
  );
};

export default LoginGuideCard;
