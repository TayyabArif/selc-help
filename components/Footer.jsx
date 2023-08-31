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
    <div className='flex md:flex-row flex-col md:gap-0 gap-5 bg-primary px-10 py-8 justify-between'>
      <div className='flex flex-col md:w-[50%] w-full'>
        <img src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-horizontal-transparent-white.png"
          alt="logo" className='md:w-[50%] w-full md:ml-0 -ml-4 cursor-pointer' onClick={() => router.push('/')}/>
        <div className='flex md:justify-start justify-center gap-5 md:ml-10 md:mt-5 mt-8'>
          <img src="/twitterIcon.svg" alt='twitter' className='w-6 h-6'/>
          <img src="/fbIcon.svg" alt='facebook' className='w-6 h-6'/>
          <img src="/instaIcon.svg" alt='Insta' className='w-6 h-6'/>
          <img src="/linkedIn.svg" alt='Insta' className='w-6 h-6'/>
          <img src="/whatsapp.svg" alt='Insta' className='w-6 h-6'/>
        </div>
      </div>
      <div className='flex flex-col text-white md:w-[40%] w-full md:ml-10 md:mt-0 mt-5'>
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
