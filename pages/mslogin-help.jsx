import Layout from '@/components/Layout'
import LoginGuideCard from '@/components/LoginGuideCard'
import React from 'react'

const msloginHelp = () => {
  const loginStep = {
    heading: "Why use MS Login?",
    steps: [
      "Microsoft 365 is our cloud-powered productivity platform. ​​",
      "The latest productivity apps, such as Microsoft Teams, Word, Excel, PowerPoint, Outlook, OneDrive, and so much more.​",
      "The ability to install on PCs, Macs, tablets, and phones"
    ],
    image: "/question.jpg"
  };
  const setupStep = {
    heading: "How to use MS login",
    steps: [
      "Enter Username - 'Student number' <strong>@myselcedu.com </strong> ​",
      `Enter Password -It would be the same password utilized for Moodle login ​`
    ],
    image: "/question.jpg"
  };

  return (
    <Layout>
      <div className='flex flex-col w-full px-10 h-full my-5'>
        <div>
        <img
          src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
          alt="logo"
          className="w-[20%] h-20"
        />
        </div>
        <p className='text-[25px] text-primary underline w-full text-center'>
          Follow this Step by Step Guide for MS login Help
        </p>
        <div className='flex flex-wrap w-full mt-5 gap-5'>
          <LoginGuideCard data={loginStep} />
          <LoginGuideCard data={setupStep}/>
        </div>
      </div>
    </Layout>
  )
}

export default msloginHelp
