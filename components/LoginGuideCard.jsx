import Image from "next/image";
import React, { useState } from "react";
import VideoModal from "./VideoModal";

const LoginGuideCard = ({data}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
      <a href="#" className="">
        <img class="rounded-t-lg" src={data?.image} alt="guide"className="h-[250px] w-full"/>
      </a>
      <div class="p-5 h-[50%]">
        <a href="#" className="h-[20%]">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.heading}
          </h5>
        </a>
        <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400 bullets pl-3 h-[150px]">
          {data?.steps.map((item, index) => {
            return(
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            )
          })}
        </ul>
        <p
          onClick={openModal}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[20%] cursor-pointer"
        >
          watch Video
          <Image src="/arrowRight.svg" alt="arrowRight" width={14} height={14} className="ml-2"/>
        </p>
        <VideoModal isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default LoginGuideCard;
