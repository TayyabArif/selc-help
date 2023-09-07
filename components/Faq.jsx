import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

const Faq = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);

  return (
    <>
      <section
        className="w-full mt-8 py-12 bg-gray-50 sm:py-16 lg:py-14 xl:py-14 mb-32"
        id="target_faq"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className=" text-[2rem] md:text-[3rem] font-bold tracking-tight text-branding ">
              Frequently Asked <span className="text-gray-700">Questions</span>
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-gray-600 lg:text-xl  lg:mt-6 lg:leading-8">
              Ask everything you need to know about our products and services.
            </p>
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
                    Q. Is SELC College a Designated Learning Intuition (DLI)? What is the DLI number for college.{" "}
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
                    Yes, SELC College is a Designated Learning Institution and DLI number for college is
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
                    Q. Is there orientation to SELC College.?
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
                  Yes, Orientation provides students with the opportunity to discover the university, become acquainted with the campus, interact with administrative personnel, and identify resources available for assistance when required. The primary objective of the orientation is to underscore our robust learning environment and support system for students. Please be aware that attendance at the New Student Orientation is compulsory for all incoming students, as successful completion is a prerequisite for enrolling in other courses.
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
                    Q.Does SELC college offer any accommodation assistance to its students?
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
                    Yes
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
                    Q. Does SELC offer any scholarships, rewards or grants to the students? {" "}
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
                  Yes, We provide an array of scholarships, awards, and grants accessible to both domestic and international students. To access a comprehensive list, along with the eligibility requirements and guidelines, please refer to our resources.
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
                    Q.  Does college offer any career advice or support to its students?{" "}
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
                  Yes, our co-op department offers assistance to students to get ready for the job market.
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
                  <span className="w-[90%]"> Q. Are students eligible for work while attending college? </span>
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
                  International students studying in Canada can work up to 20 hours per week if they are enrolled in a full-time program lasting at least six months. For more information, please visit:{" "}
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
                    Q. What mode of transportation is available for the students? {" "}
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
                  SELC College enjoys a prime location in the heart of Vancouver's downtown area, providing convenient access to the city's extensive public transportation network, including buses and SkyTrain stations. This central positioning ensures that students have easy and efficient commuting options to and from the college, making it highly accessible for those traveling from various parts of the city.
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
