import React from 'react'

const Footer = () => {
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
    <div className='flex bg-primary px-10 py-8 justify-between'>
      <div className='flex flex-col w-[50%]'>
        <img src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-horizontal-transparent-white.png"
        alt="logo" className='w-[50%]'/>
        <div className='flex gap-5 mt-5 ml-10'>
          <img src="/twitterIcon.svg" alt='twitter' className='w-5 h-5 '/>
          <img src="/fbIcon.svg" alt='facebook' className='w-5 h-5 '/>
          <img src="/instaIcon.svg" alt='Insta' className='w-5 h-5 '/>
          <img src="/linkedIn.svg" alt='Insta' className='w-5 h-5'/>
          <img src="/whatsapp.svg" alt='Insta' className='w-5 h-5'/>
        </div>
      </div>
      <div className='flex flex-col text-white w-[40%]  ml-10'>
        <p className='text-[25px] mb-4'>
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
