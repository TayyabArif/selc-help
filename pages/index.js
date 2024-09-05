import Card from "@/components/Card";
import Faq from "@/components/Faq";
import Layout from "@/components/Layout";
import LoginGuideCard from '@/components/LoginGuideCard'
import React, { useEffect, useState } from "react";
import SuccessModal from '@/components/SuccessModal';
import Hero from "@/components/Hero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';
import CoopCard from "@/components/CoopCard";
import CoopSubCards from "@/components/CoopSubCards";
import Image from "next/image";

export default function Home() {
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);

  const [visitCount, setVisitCount] = useState(0);
  const [isArrive, setIsArrive] =useState(false)

  useEffect(() => {
    fetch('/api/visit')
      .then((response) => response.json())
      .then((data) => {
        setVisitCount(data.visitCount);
        setIsArrive(true)
      });
  }, []);

  useEffect(() => {
    if (visitCount < 4) {
    }
  }, [visitCount]);

  const loginStep = {
    heading: translations.portalCards.step1,
    image: "/steps/login.png",
    // video: "/steps/login.mp4",
    video: null,
    doc: "/How-to-Login.pdf",
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const portalUse = {
    heading: translations.portalCards.step4,
    image: "/steps/portal1.png",
    // video: "/steps/portal.mp4",
    video: null,
    doc: "/learning-through-portal.pdf",
    redirect: "https://www.myselcedu.com/",
    text: translations.portalCards.link4,
  };
  const officeloginStep = {
    heading: translations.portalCards.officeStep,
    image: "/steps/mslogin1.png",
    // video: "/steps/msoffice.mp4",
    video: null,
    doc: "/Microsoft-Office.pdf",
    redirect: "https://www.office.com/",
    text: translations.portalCards.link1,
  };
  const adminStep = {
    heading: translations.portalCards.adminStep,
    image: "/coming-soon2.png",
    video: null,
    doc: null,
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const registrationStep = {
    heading: translations.portalCards.registrationStep,
    image: "/coming-soon2.png",
    video: null,
    doc: null,
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const studentServicesStep = {
    heading: translations.portalCards.SSstep,
    image: "/ssimage.png",
    video: "Student-service.mp4",
    doc: "/Student-Services.pdf",
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const financeStep = {
    heading: translations.portalCards.financeStep,
    image: "/financeimage.png",
    video: "/Finance.mp4",
    doc: "/Finance1.pdf",
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const coopStep = {
    heading: translations.portalCards.coopStep,
    image: "/co-op.png",
    video: null,
    doc: "/co-op.pdf",
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const policiesStep = {
    heading: translations.portalCards.policiesStep,
    image: "/policies.png",
    video: null,
    doc: "/policies.pdf",
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };
  const faqstep = {
    heading: translations.portalCards.faqStep,
    image: "/coming-soon2.png",
    video: null,
    doc: null,
    redirect: "https://www.myselcedu.com/login/",
    text: translations.portalCards.link1,
  };

  const cardsData = [
    {
      bg:"card1",
      heading: translations.mainCards.portal,
      image: "/identification.svg",
      value: "login",
    },
    {
      bg:"card2",
      heading: translations.mainCards.moodle,
      image: "/learning.svg",
      value: "moodle",
    },
    {
      bg:"card3",
      heading: translations.mainCards.office,
      image: "/microsoft.svg",
      value: "ms",
    },
    {
      bg: "card6",
      heading: translations.mainCards.studentService,
      image: "/service.svg",
      value: "ss",
    },
    {
      bg: "card7",
      heading: translations.mainCards.finance,
      image: "/finance.svg",
      value: "finance",
    },
    {
      bg: "card8",
      heading: translations.mainCards.career,
      image: "/development.svg",
      value: "coop",
    },
    {
      bg: "card9",
      heading: translations.mainCards.policies,
      image: "/policies.svg",
      value: "policies",
    },
    {
      bg: "card10",
      heading: translations.mainCards.contact,
      image: "/hand.svg",
      value: "contact",
    },
  ]
  const coopCardData = [
    {
      bg:"card1",
      heading: translations?.coopCards?.portal,
      image: "/identification.svg",
      value: "login",
    },
    // {
    //   bg:"card2",
    //   heading: translations.mainCards.moodle,
    //   image: "/learning.svg",
    //   value: "moodle",
    // },
    // {
    //   bg:"card3",
    //   heading: translations.mainCards.office,
    //   image: "/microsoft.svg",
    //   value: "ms",
    // },
    // {
    //   bg: "card6",
    //   heading: translations.mainCards.studentService,
    //   image: "/service.svg",
    //   value: "ss",
    // },
  ]
  const coopsubCardData = [
    {
      bg:"card2",
      heading: translations?.coopCards?.coopprocedure,
      redirect: "procedure",
      image: "/learning.svg",
      value: "procedure",
    },
    {
      bg:"card3",
      heading: translations?.coopCards?.coopfaq,
      redirect: "coopfaq",
      image: "/development.svg",
      value: "faq",
    },
    {
      bg: "card8",
      heading: translations?.coopCards?.coopparticum,
      redirect: "/coop-documentation",
      image: "/hand.svg",
      value: "particum",
    },
  ]
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
  const [isCoopMainClick, setIsCoopMainClick] = useState(false)
  const { stepCount, incrementStep, handleSkip } = useTour();
  useEffect(() => {
    if (stepCount === 4) {
      setIsLoginClick("login")
    }
  }, [stepCount])
  return (
    <Layout visitCount={visitCount} isArrive={isArrive}>
      <div className="flex w-full flex-col bg-white h-full mt-20">
        {/* <Hero visitCount={visitCount}/> */}
        {/* <div id="cardsSection1" className="h-10">
        </div> */}
        <div id="cardsSection">
        </div>
        {/* <div id="cardsSection1" className={`flex flex-col w-full justify-center mt-20 ${isloginClick ? "mb-0" : "mb-20"}`}>
          <div className="flex lg:flex-row flex-col gap-5 w-full flex-wrap justify-center lg:items-start items-center">
            {cardsData?.map((data, index) => {
              return(
                <Card
                  key={index}
                  bg={data.bg}
                  heading={data.heading}
                  image={data.image}
                  setIsLoginClick={setIsLoginClick}
                  value={data.value}
                  isNotLikeVideo={isNotLikeVideo}
                  setIsNotLikeVideo={setIsNotLikeVideo}
                />
              )
            })}
          </div>
        </div> */}
        {/* <div id="cardsSection1" className={`flex flex-col w-full justify-center mt-44 mb-[150px]`}>
          <div className="flex lg:flex-row flex-col gap-5 w-full flex-wrap justify-center lg:items-start items-center">
            {coopCardData?.map((data, index) => {
              return(
                <CoopCard
                  key={index}
                  bg={data.bg}
                  heading={data.heading}
                  image={data.image}
                  value={data.value}
                  setIsCoopMainClick = {() => setIsCoopMainClick(!isCoopMainClick)}
                  isCoopMainClick={isCoopMainClick}
                />
              )
            })}
          </div>
        </div> */}
        {/* {isCoopMainClick &&  */}
          <div id="cardsSection2" className={`flex flex-col w-full justify-center mt-44 mb-20`}>
            <div className="flex lg:flex-row flex-col gap-5 w-full flex-wrap justify-center lg:items-start items-center">
              {coopsubCardData?.map((data, index) => {
                return(
                  <CoopSubCards
                    key={index}
                    bg={data.bg}
                    heading={data.heading}
                    image={data.image}
                    value={data.value}
                    redirect={data.redirect}
                  />
                )
              })}
            </div>
          </div>
          <div>
            <Image src="/program-division-Anugrah.png" alt="Program Division Anugrah" width={700} height={300} className="mx-auto mb-36 w-[50%] shadow-lg rounded" />
          </div>
        {/* } */}
        {/* <div id="videoButton" className="h-20"></div> */}


        {/* {isloginClick === "login" &&
          <div className='px-10 flex md:flex-wrap md:flex-row flex-col items-center justify-center w-full mt-5 gap-5 my-5'>
            <LoginGuideCard data={loginStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick} visitCount={visitCount} />
          </div>
        }
        {isloginClick === "moodle" &&
          <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
            <LoginGuideCard data={portalUse} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
          </div>
        }
        {isloginClick === "ms" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
        <LoginGuideCard data={officeloginStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "admin" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={adminStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "registration" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={registrationStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "ss" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={studentServicesStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "finance" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={financeStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "coop" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={coopStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "policies" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={policiesStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "faq" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={faqstep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        }
        {isloginClick === "advisor" &&
        <div className='px-10 flex flex-wrap w-full gap-5 justify-center my-5 mb-10'>
          <LoginGuideCard data={advisorStep} setIsNotLikeVideo={setIsNotLikeVideo} setIsLoginClick={setIsLoginClick}/>
        </div>
        } */}


        {/* {isloginClick === "contact" &&
          <div className="py-6 px-4 mx-auto min-w-[80%] max-w-screen-xl sm:py-8 lg:px-6 ">
              <form onSubmit={handleSubmit}  className="flex flex-col gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-[#fcfafc] rounded-lg border border-gray-200 shadow-sm lg:mb-28">
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="text" id="full-name" name='fullName' value={formData.fullName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500" placeholder={translations.contact.name} required />
                      <input type="number" id="student-id" name='studentID' value={formData.studentID} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500" placeholder={translations.contact.studentID} required />
                  </div>
                  <div className='flex md:flex-row flex-col justify-between gap-4'>
                      <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-500" placeholder={translations.contact.email} required />
                  </div>

                  <select id="countries" name='department' onChange={handleChange} class="bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    <option selected>{translations.contact.depart}</option>
                    <option value="tayyab.dev12@gmail.com">{translations.contact.option1}</option>
                    <option value="selcmarketing@selcedu.com">{translations.contact.option2}</option>
                    <option value="selcregistration@selcedu.com">{translations.contact.option3}</option>
                    <option value="itsupporthelpdesk@selcedu.com">{translations.contact.option4}</option>
                    <option value="itsupporthelpdesk@selcedu.com">{translations.contact.option5}</option>
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
                      <h1 className='font-bold text-[20px]'>{translations.contact.note}</h1>
                      <span class="block sm:inline">{translations.contact.para}</span>
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsClose(false)}>
                        <svg class="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                      </span>
                    </div>
                  }
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{translations.contact.message}</label>
                      <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder={translations.contact.messageComment}></textarea>
                  </div>
                  <button type="submit" disabled={isClick} className={`flex items-center gap-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${isClick ? 'bg-opacity-50': ''}`}>
                    {translations.contact.sendmessage}
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
        } */}
        {/* <Faq visitCount={visitCount}/> */}
      </div>
    </Layout>
  );
}
