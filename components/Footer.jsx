import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
  const router = useRouter()
  const data = [
    {
      value: "Address: 1155 W Pender St, Vancouver, BC V6E 2P4",
      image: "/location.svg"
    },
    {
      value: "310-SELC (BC)",
      image: "/phone.svg"
    },
    {
      value: "+1-604-282-0988",
      image: "/telephone.svg"
    },
    {
      value: "Info@selcedu.com",
      image: "/mail.svg"
    }
  ]
  return (
    <div className='flex relative md:flex-row flex-col md:gap-0 gap-5 footer px-10 py-8 justify-between'>
      <svg
      className="absolute -top-[5%] left-0 w-full -mt-5 sm:-mt-10 h-16 text-deep-purple-accent-400"
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >

      <path
        fill="#FF7B26"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      />
    </svg>
      <div className='flex flex-col md:w-[50%] w-full pt-10'>
        <img src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-horizontal-transparent-white.png"
          alt="logo" className='md:w-[50%] w-full md:ml-0 -ml-4 cursor-pointer' onClick={() => router.push('/')}/>
        <div className='flex md:justify-start justify-center gap-5 md:ml-10 md:mt-5 mt-8'>
          <a href="https://www.twitter.com/selccollege" target="_blank" rel="noopener noreferrer">
            <img src="/twitterIcon.svg" alt='twitter' className='w-6 h-6'/>
          </a>
          <a href="https://www.facebook.com/selccollege" target="_blank" rel="noopener noreferrer">
            <img src="/fbIcon.svg" alt='facebook' className='w-6 h-6'/>
          </a>
          <a href="https://www.instagram.com/selccollege" target="_blank" rel="noopener noreferrer">
            <img src="/instaIcon.svg" alt='Insta' className='w-6 h-6'/>
          </a>
          <a href="https://www.linkedin.com/school/selccollege/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedIn.svg" alt='LinkedIn' className='w-6 h-6'/>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=16047812689&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.svg" alt='WhatsApp' className='w-6 h-6'/>
          </a>
        </div>
      </div>
      <div className='flex flex-col text-white md:w-[40%] w-full md:ml-10 md:mt-0 mt-5 pt-10'>
        <p className='md:text-[25px] text-[30px] mb-4'>
          Contact Info
        </p>
        <div className='flex flex-col gap-5'>
          {data?.map((item, index) => {
            return(
              <div key={index} className='flex gap-5'>
                <img src={item.image} alt='Insta' className='w-5 h-5'/>
                <p>{item.value}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Footer
