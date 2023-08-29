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
  const [sendRequest, setSendRequest] = useState(false);

  const navigate = useRouter();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rednerLoader, setRenderLoader] = useState(false);

  // const fadeIn = useSpring({
  //   opacity: visible ? 1 : 0,
  //   transform: visible ? `scale(1)` : `scale(1.1)`,
  //   display: visible ? "block" : "none",
  //   config: {
  //     delay: 800,
  //     duration: 400,
  //   },
  // });

  const handleGetStartClick = () => {
    if (localStorage.getItem("isUserRegistered") !== null) {
      navigate.push("/dashboard");
    } else {
      setVisible(() => true);
    }
  };
  return (
    <>
      <section
        className="w-full mt-8 py-12 bg-gray-50 sm:py-16 lg:py-14 xl:py-14"
        id="target_faq"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className=" text-[2rem] md:text-[3rem] font-bold tracking-tight text-normalBlue ">
              Frequently Asked <span className="text-gray-900">Questions</span>
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
                    Q. Is FreeAdCopy actually free?{" "}
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question1 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                    Yes. FreeAdCopy.com is 100% free forever.
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
                    Q. Will the AI-generated copy feel 'robotic' or lack the
                    creativity and nuance of human writing?
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question2 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                    Nope. We’ve trained our AI to generate copy that's so
                    human-like, it has outperformed some of the world's top
                    copywriters. Expect conversational, emotionally resonant
                    language that engages your audience.
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
                    Q. How can your AI understand my biz as well as a human
                    copywriter?
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question3 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                    Great question. Our solution is modeled on the strategy we
                    use at our multi-million-dollar ad agency. We've identified
                    the crucial variables (often just 3-4 keywords) that are
                    needed to create world-class copy. You add those. The rest
                    is generated by our AI model.
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
                    Q. Do these ads actually work?{" "}
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question4 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                    Yes. Our AI-generated copy has already beaten ads written by
                    some of the world's best copywriters.
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
                    Q. Is the AI able to capture and maintain my brand's unique
                    voice and tone throughout the ad copy?{" "}
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question5 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-gray-600`}>
                    Absolutely. Our system allows you to tweak and tailor the
                    tone to your liking using a unique set of modifiers.
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
                  <span className="w-[90%]"> Q. How do I get started? </span>
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
                className={`overflow-hidden transition-max-height duration-1000 ${
                  question6 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className={`text-base text-black`}>
                    Just{" "}
                    <span
                      className="cursor-pointer text-[#0000FF]"
                      onClick={() => {
                        document.getElementById("target_input").focus();
                        window.scrollTo(10, 10);
                      }}
                    >
                      click this link
                    </span>{" "}
                    to start generating world-class copy (almost) instantly for
                    FREE!
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
