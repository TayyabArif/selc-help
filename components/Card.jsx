import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";


const Card = ({bg, heading,subhead, image, redirect }) => {
  const router = useRouter();

  return (
    <p
    className={`block max-w-sm p-6 ${bg} border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative group transition-transform transform hover:scale-110 w-[25%] cursor-pointer`}
    onClick={() => router.push(redirect)}
  >
    <div className="text-center h-full">
      <Image src={image} alt="card iamge" width={100} height={100} className="mx-auto mb-5 h-[40%]" />
      <p className="flex flex-col justify-center bottom-3 right-6 text-white text-[22px] font-bold mb-2 h-[30%]">
        {heading}
      </p>
      {/* <p className="bottom-3 right-6 text-white text-sm h-[30%]">
        {subhead}
      </p> */}
    </div>
    <div className="transition-transform transform origin-right opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute right-6 top-1/2 -translate-y-1/2">
    <Image src="/rightTag.svg" alt="arrow" width={24} height={24} />
    </div>
  </p>
  )
}

export default Card
