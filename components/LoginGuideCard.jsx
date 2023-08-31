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
    <div class="w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
      <a href="#" className="">
        <img class="rounded-t-lg" src={data?.image} alt="guide"className="h-[250px] w-full"/>
      </a>
      <div class="p-5 h-[50%]">
        <a href="#" className="h-[20%] text-center">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
            {data?.heading}
          </h5>
        </a>
        <div className="flex w-full justify-center">
        <p
          onClick={openModal}
          class="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[20%] cursor-pointer"
        >
          Watch Video
          <Image src="/arrowRight.svg" alt="arrowRight" width={14} height={14} className="ml-2"/>
        </p>
        </div>
        <VideoModal isOpen={modalOpen} onClose={closeModal} video = {data.video} />
      </div>
    </div>
  );
};

export default LoginGuideCard;
