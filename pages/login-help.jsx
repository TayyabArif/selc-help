import Header from '@/components/Header';
import Layout from '@/components/Layout'
import LoginGuideCard from '@/components/LoginGuideCard'
import React from 'react'
import { useRouter } from 'next/router'

const loginHelp = () => {
  const router = useRouter()
  const loginStep = {
    heading: "How to Login & set Password",
    image: "/steps/login-vector.jpeg",
    video: "/steps/login.mp4"
  };
  const securityQuestion = {
    heading: "Security Question & SIN",
    image: "/steps/security-vector.jpeg",
    video: "/steps/secure-profile.mp4"
  };
  const updateProfile = {
    heading: "Update profile",
    image: "/steps/update-vector1.jpeg",
    video: "/steps/login.mp4"
  };
  const portalUse = {
    heading: "Navigate through student portal",
    image: "/steps/portal-vector.jpeg",
    video: "/steps/login.mp4"
  };
  return (
    <Layout>
      <div className='flex flex-col w-full min-h-screen'>
        <div className='w-full flex lg:justify-start justify-center'>
        <img
          src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
          alt="logo"
          className="lg:w-[20%] md:w-[30%] w-[70%] md:h-20 h-[90px] lg:hidden block"
          onClick={() => router.push('/')}
        />
        <Header />
        </div>
        <div className='flex px-10 md:flex-wrap md:flex-row flex-col items-center justify-center xl:justify-start w-full mt-5 gap-5 my-5'>
          <LoginGuideCard data={loginStep} />
          <LoginGuideCard data={securityQuestion}/>
          <LoginGuideCard data={updateProfile}/>
          <LoginGuideCard data={portalUse}/>
        </div>
      </div>
    </Layout>
  )
}

export default loginHelp
