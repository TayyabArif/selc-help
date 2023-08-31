import Card from "@/components/Card";
import Faq from "@/components/Faq";
import Layout from "@/components/Layout";
import LoginGuideCard from '@/components/LoginGuideCard'
import React, { useEffect, useState } from "react";
import SuccessModal from '@/components/SuccessModal';

export default function Home() {
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
    video: "/steps/profile.mp4"
  };
  const portalUse = {
    heading: "Navigate through student portal",
    image: "/steps/portal-vector.jpeg",
    video: "/steps/portal.mp4"
  };
  const officeloginStep = {
    heading: "Login through MS",
    steps: [
      "Microsoft 365 is our cloud-powered productivity platform. ​​",
      "The latest productivity apps, such as Microsoft Teams, Word, Excel, PowerPoint, Outlook, OneDrive, and so much more.​",
      "The ability to install on PCs, Macs, tablets, and phones"
    ],
    image: "/steps/mslogin1.jpeg",
    video: "/steps/msoffice.mp4"
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

    // Optionally reset form data here
  } else {
    setSubmissionStatus('error');
  }
} catch (error) {
  console.error('Error sending email:', error);
  setSubmissionStatus('error');
}
};
const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleCloseModal = () => {
setIsSuccessModalOpen(false);
};

const [isNextClick, setIsNextClick] = useState(false)
const [isClose, setIsClose] = useState(true);
  const [isloginClick, setIsLoginClick] = useState("");
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
        <div className="flex flex-col w-full justify-center mt-14 mb-8">
          <div className="flex lg:flex-row flex-col gap-5 w-full justify-center lg:items-start items-center">
            <Card
              bg="card1"
              heading="Student portal"
              subhead="Please follow our step by step guide"
              image="/identification.svg"
              setIsLoginClick={setIsLoginClick}
              value="login"
            />
            <Card
              bg="card2"
              heading="MS student login help"
              subhead="Please follow our step by step guide"
              image="/microsoft.svg"
              setIsLoginClick={setIsLoginClick}
              value="ms"
            />
            <Card
              bg="card3"
              heading="Can’t find what you’re looking for? Click here."
              subhead="Feel free to contact us"
              image="/hand.svg"
              setIsLoginClick={setIsLoginClick}
              value="contact"
            />
          </div>
        </div>
        {isloginClick === "login" &&
          <div className='px-10 flex md:flex-wrap md:flex-row flex-col items-center justify-center w-full mt-5 gap-5 my-5'>
            <LoginGuideCard data={loginStep} />
            <LoginGuideCard data={securityQuestion}/>
            <LoginGuideCard data={updateProfile}/>
            <LoginGuideCard data={portalUse}/>
          </div>
        }
        {isloginClick === "ms" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
        <LoginGuideCard data={officeloginStep} />
        </div>
        }
        {isloginClick === "contact" &&
          <div className="py-6 px-4 mx-auto min-w-[80%] max-w-screen-xl sm:py-8 lg:px-6 ">
              <form onSubmit={handleSubmit}  className="flex flex-col gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-[#fcfafc] rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700">
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="text" id="full-name" name='fullName' value={formData.fullName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required />
                      <input type="number" id="student-id" name='studentID' value={formData.studentID} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="2301122" required />
                  </div>
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                      <input type="number" id="phone-number" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required />
                  </div>

                  <select id="countries" name='department' onChange={handleChange} class="bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose your Department to cintact</option>
                    <option value="US">Marketer</option>
                    <option value="CA">Student Services</option>
                    <option value="FR">Registrar</option>
                    <option value="DE">Co-op</option>
                    <option value="DE">IT</option>
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
                      <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
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
