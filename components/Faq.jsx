import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';

const Faq = ({visitCount}) => {
  const { selectedLanguage } = useLanguage();
  const translations = require(`../utlis/languages/${selectedLanguage}.json`);
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const { stepCount, incrementStep, handleSkip } = useTour();

  return (
    <>
      <section
        className="w-full mt-8 py-12 bg-gray-50 sm:py-16 lg:py-14 xl:pt-14 xl:pb-[8.5rem]"
        id="target_faq"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className=" text-[2rem] md:text-[3rem] font-bold tracking-tight text-branding ">
              {translations.faq.heading1} <span className="text-gray-700">{translations.faq.heading2}</span>
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-gray-600 lg:text-xl  lg:mt-6 lg:leading-8">
              {translations.faq.subheading}
            </p>
            {visitCount < 4  && stepCount === 5 &&
                <div class="bg-orange-400 bg-opacity-100 text-white p-8 rounded-lg shadow-lg absolute w-[350px] md:top-[50%] top-[60%] md:left-[80%] -left-[0%] z-10 card-animation1 text-start">
                  <div className="md:triangle-left triangle-top1"></div>
                 <h2 class="text-xl font-semibold mb-2">5/5</h2>
                  <h2 class="text-xl font-semibold mb-2">What is Faq?</h2>
                  <p class="mb-6">Faq section includes all the common queries of students</p>
                  <div class="flex justify-end gap-5 mt-4">
                    <button class="px-4 py-2 bg-primary hover:bg-orange-500 text-base font-bold text-white rounded" onClick={handleSkip}>Finish</button>
                  </div>
                </div>
              }
          </div>
          <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion1(!question1)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q1}{" "}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question1
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question1 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question1 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans1}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion2(!question2)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q2}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question2
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question2 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question2 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans2}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion3(!question3)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q3}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question3
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question3 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question3 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans3}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion4(!question4)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q4} {" "}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question4
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question4 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question4 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans4}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion5(!question5)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q5}{" "}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question5
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question5 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question5 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans5}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion6(!question6)}
                >
                  <span className="w-[90%]"> {translations.faq.q6} </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question6
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question6 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question6 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-black`}>
                  {translations.faq.ans6}{" "}
                    <a
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html" target="_blank" rel="noopener noreferrer" className="text-primary"
                    >
                      https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-left text-gray-900 sm:p-6"
                  onClick={() => setQuestion7(!question7)}
                >
                  <span className="w-[90%]">
                    {" "}
                    {translations.faq.q7} {" "}
                  </span>
                  <span className="ml-4">
                    <Image
                      src={
                        question7
                          ? "/HomePage/subtractIcon.svg"
                          : "/HomePage/addIcon.svg"
                      }
                      width={20}
                      height={20}
                      alt={question7 ? "Subtract Icon" : "Add Icon"}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={`overflow-hidden transition-max-height ${
                  question7 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                  {translations.faq.ans7}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
