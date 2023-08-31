import Header from '@/components/Header';
import Layout from '@/components/Layout'
import LoginGuideCard from '@/components/LoginGuideCard'
import React from 'react'
import { useRouter } from 'next/router'

const msloginHelp = () => {
  const router = useRouter();
  const loginStep = {
    heading: "Login through MS",
    steps: [
      "Microsoft 365 is our cloud-powered productivity platform. ​​",
      "The latest productivity apps, such as Microsoft Teams, Word, Excel, PowerPoint, Outlook, OneDrive, and so much more.​",
      "The ability to install on PCs, Macs, tablets, and phones"
    ],
    image: "/steps/mslogin1.jpeg",
    video: "/steps/msoffice.mp4"
  };

  return (
    <Layout>
      <div className='flex flex-col w-full h-full min-h-screen'>
      <div className='w-full flex lg:justify-start justify-center'>
        <img
          src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
          alt="logo"
          className="lg:w-[20%] md:w-[30%] w-[70%] md:h-20 h-[90px] lg:hidden block"
          onClick={() => router.push('/')}
        />
        <Header />
        </div>
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center lg:justify-start my-5 mb-10'>
          <LoginGuideCard data={loginStep} />
        </div>
      </div>
    </Layout>
  )
}

export default msloginHelp
