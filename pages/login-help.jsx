import Layout from '@/components/Layout'
import LoginGuideCard from '@/components/LoginGuideCard'
import React from 'react'

const loginHelp = () => {
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
      <div className='flex flex-col w-full px-10 h-full my-5'>
        <div>
        <img
          src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
          alt="logo"
          className="w-[20%] h-20"
        />
        </div>
        <div className='flex flex-wrap w-full mt-5 gap-5'>
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
