import Card from "@/components/Card";
import Faq from "@/components/Faq";
import Layout from "@/components/Layout";
import LoginGuideCard from '@/components/LoginGuideCard'
import React, { useEffect, useState } from "react";
import SuccessModal from '@/components/SuccessModal';

export default function Home() {
  const loginStep = {
    heading: "Login Made Easy ",
    image: "/steps/login.png",
    video: "/steps/login.mp4",
    redirect: "https://www.myselcedu.com/login/",
    text: "Click link to visit login page"
  };
  const securityQuestion = {
    heading: "Secure Profile",
    image: "/steps/secure-profile.png",
    video: "/steps/secure-profile.mp4",
    redirect: "https://www.myselcedu.com/profile/setup/",
    text: "Click link to add security questions"
  };
  const updateProfile = {
    heading: "Update your Profile",
    image: "/steps/update.png",
    video: "/steps/profile.mp4",
    redirect: "https://www.myselcedu.com/profile/requests/?r=109",
    text: "Click link to update the profile information"
  };
  const portalUse = {
    heading: "Navigating the Student Portal",
    image: "/steps/portal1.png",
    video: "/steps/portal.mp4",
    redirect: "https://www.myselcedu.com/",
    text: "Click link to visit landing page"
  };
  const officeloginStep = {
    heading: "Boost Productivity with Office 365",
    steps: [
      "Microsoft 365 is our cloud-powered productivity platform. ​​",
      "The latest productivity apps, such as Microsoft Teams, Word, Excel, PowerPoint, Outlook, OneDrive, and so much more.​",
      "The ability to install on PCs, Macs, tablets, and phones"
    ],
    image: "/steps/mslogin1.png",
    video: "/steps/msoffice.mp4",
    redirect: "https://www.office.com/",
    text: "Click link to visit login page"
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    studentID: '',
    department: '',
    message: '',
  });

const [submissionStatus, setSubmissionStatus] = useState('');
const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


const handleSubmit = async (event) => {
event.preventDefault();
setIsClick(true)
console.log('formData is ', formData)
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setIsSuccessModalOpen(true);
  } else {
    setSubmissionStatus('error');
  }
  setIsClick(false)
} catch (error) {
  setIsClick(false)
  console.error('Error sending email:', error);
  setSubmissionStatus('error');
}
};
const handleChange = (e) => {
  console.log('===========',e.target.name, e.target.value)
setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleCloseModal = () => {
setIsSuccessModalOpen(false);
};

const [isNextClick, setIsNextClick] = useState(false)
const [isClose, setIsClose] = useState(true);
  const [isloginClick, setIsLoginClick] = useState("");
  const [isNotLikeVideo, setIsNotLikeVideo] = useState(false);
  const [isClick, setIsClick] = useState(false);
  return (
    <Layout>
      <div className="flex w-full flex-col bg-white h-full">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center w-full h-[350px]"
          style={{ backgroundImage: `url("/home-bg.png")`}}
        >
           <div className="absolute inset-0 bg-black opacity-40 w-full h-[350px]" />
          <div className="text-center transition-transform transform hover:scale-110 duration-1000 w-full flex flex-col">
            <p className="text-white font-bold md:text-[55px] text-[45px] font-custom">
            Welcome to Student Help Desk
            </p>
          </div>
        </div>
        <div id="cardsSection">
        </div>
        <div id="cardsSection" className="flex flex-col w-full justify-center mt-14 mb-8 ">
          <div className="flex lg:flex-row flex-col gap-5 w-full justify-center lg:items-start items-center">
            <Card
              bg="card1"
              heading="Student portal"
              subhead="Please follow our step by step guide"
              image="/identification.svg"
              setIsLoginClick={setIsLoginClick}
              value="login"
              isNotLikeVideo={isNotLikeVideo}
              setIsNotLikeVideo={setIsNotLikeVideo}
            />
            <Card
              bg="card2"
              heading="MS office student login help"
              subhead="Please follow our step by step guide"
              image="/microsoft.svg"
              setIsLoginClick={setIsLoginClick}
              value="ms"
              isNotLikeVideo={isNotLikeVideo}
              setIsNotLikeVideo={setIsNotLikeVideo}
            />
            <Card
              bg="card3"
              heading="Can’t find what you’re looking for? Click here."
              subhead="Feel free to contact us"
              image="/hand.svg"
              setIsLoginClick={setIsLoginClick}
              value="contact"
              isNotLikeVideo={isNotLikeVideo}
              setIsNotLikeVideo={setIsNotLikeVideo}
            />
          </div>
        </div>
        <div id="videoButton"></div>
        {isloginClick === "login" &&
          <div className='px-10 flex md:flex-wrap md:flex-row flex-col items-center justify-center w-full mt-5 gap-5 my-5'>
            <LoginGuideCard data={loginStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick} />
            <LoginGuideCard data={securityQuestion} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
            <LoginGuideCard data={updateProfile} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
            <LoginGuideCard data={portalUse} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
          </div>
        }
        {isloginClick === "ms" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
        <LoginGuideCard data={officeloginStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "contact" &&
          <div className="py-6 px-4 mx-auto min-w-[80%] max-w-screen-xl sm:py-8 lg:px-6 ">
              <form onSubmit={handleSubmit}  className="flex flex-col gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-[#fcfafc] rounded-lg border border-gray-200 shadow-sm lg:mb-28">
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="text" id="full-name" name='fullName' value={formData.fullName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500" placeholder="Full Name" required />
                      <input type="number" id="student-id" name='studentID' value={formData.studentID} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500" placeholder="Student ID" required />
                  </div>
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-500" placeholder="Enter your email" required />
                  </div>

                  <select id="countries" name='department' onChange={handleChange} class="bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    <option selected>Choose your Department to cintact</option>
                    <option value="tayyab.dev12@gmail.com">Marketer</option>
                    <option value="selcmarketing@selcedu.com">Student Services</option>
                    <option value="selcregistration@selcedu.com">Registrar</option>
                    <option value="itsupporthelpdesk@selcedu.com">Co-op</option>
                    <option value="itsupporthelpdesk@selcedu.com">IT</option>
                  </select>
                  <div className='w-full cursor-pointer'>
                  <p className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => setIsNextClick(!isNextClick)}>
                    {isNextClick ? "Prev" : "Next"
                    }
                    </p>
                  </div>
                  {isNextClick &&
                  <>
                  {isClose &&
                    <div class="bg-blue-100 border border-blue-100 text-gray-500 px-4 py-3 rounded relative" role="alert">
                      <h1 className='font-bold text-[20px]'>Note</h1>
                      <span class="block sm:inline">Please note that requests might take upto 24 hours to process. Thank you for your patience!</span>
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsClose(false)}>
                        <svg class="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span>
                    </div>
                  }
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" disabled={isClick} className={`flex items-center gap-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${isClick ? 'bg-opacity-50': ''}`}>
                    Send message
                    {isClick &&
                    <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    }
                    </button>
                  </>
                }
              </form>
              <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} />
          </div>
        }
        <Faq />
      </div>
    </Layout>
  );
}
