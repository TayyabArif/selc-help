import Layout from '@/components/Layout'
import LoginGuideCard from '@/components/LoginGuideCard'
import React from 'react'

const loginHelp = () => {
  const loginStep = {
    heading: "How to Login?",
    steps: [
      "Enter your <strong>Student Number</strong> as your Username​",
      "Enter the <strong>temporary password</strong> provided in your email. "
    ],
    image: "/steps/step1.png"
  };
  const setupStep = {
    heading: "Set your password",
    steps: [
      "You will be directed to a new page to set up a new password​​",
      `If you need to reset your password at any time, please click on the <strong>"Forgot Password"</strong> and a reset link will be sent to your personal email address. ​`
    ],
    image: "/steps/step2.png"
  };
  const securityQuestion = {
    heading: "Security Question",
    steps: [
      "You will be prompted to set up <strong>security questions</strong>.​​",
      `Please select three questions from the drop-down menus and provide answers for each one and click the box of <strong>SAVE QUESTIONS</strong>.​​`
    ],
    image: "/steps/step3.png"
  };
  const updateProfile = {
    heading: "Update profile",
    steps: [
      " You will then be prompted to next page to ask about your <strong>SIN number and mobile number</strong>.​​",
      `If you do not have SIN number, you can just fill your <strong>mobile number</strong> and save to move to next page.​​​`
    ],
    image: "/steps/step4.png"
  };
  const requests = {
    heading: "Pending Requests",
    steps: [
      "A prompt for the homepage will then appear.​",
      `You can see all the pending requests and click to submit required documents.​​`
    ],
    image: "/steps/step5.png"
  };
  const portalUse = {
    heading: "How to use student portal?",
    steps: [
      "When you log in to the student portal, it will always take you to the home page.​",
      `Watch full video to get complete Guide​​`
    ],
    image: "/steps/step6.png"
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
          Follow this Step by Step Guide
        </p>
        <div className='flex flex-wrap w-full mt-5 gap-5'>
          <LoginGuideCard data={loginStep} />
          <LoginGuideCard data={setupStep}/>
          <LoginGuideCard data={securityQuestion}/>
          <LoginGuideCard data={updateProfile}/>
          <LoginGuideCard data={requests}/>
          <LoginGuideCard data={portalUse}/>
        </div>
      </div>
    </Layout>
  )
}

export default loginHelp
