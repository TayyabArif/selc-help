import Card from "@/components/Card";
import Faq from "@/components/Faq";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const onClose = () => {
    setModalOpen(false);
  };
  return (
    <Layout>
      <div className="flex w-full flex-col bg-white h-full">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center w-full h-[350px]"
          style={{ backgroundImage: `url("/question.jpg")` }}
        >
          <div className="text-center transition-transform transform hover:scale-110 duration-1000 w-full flex flex-col">
            <div className=" flex itemx-center justify-center">
              <img
                src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
                alt="logo"
                className="w-[40%] h-40"
              />
            </div>
            <p className="text-white font-bold text-[35px] font-custom">
              HAVING TROUBLE USING SELC PORTAL?
            </p>
            <p className="text-white font-medium text-[20px] font-custom">
              Check our step by step guide. Feel free to contact us
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center mt-4 mb-8">
          <div className="flex flex-col w-full text-center mt-4 mb-8 font-custom items-center">
            <p className="font-bold text-[40px] w-[70%] text-center leading-tight text-[#292929]">
              SELC college welcomes you and always there to help you in every step of
              the way
            </p>
            <p className="relative text-[30px] font-semibold mt-7">
              Please choose the option get started
              <span className="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#f15a29] via-[#f7941d] to-[#ffb606]">
                Please choose the option get started
              </span>
            </p>
          </div>
          <div className="flex gap-5 w-full justify-center">
            <Card
              bg="card1"
              heading="Student portal help"
              subhead="Please follow our step by step guide"
              image="/identification.svg"
              redirect = "/login-help"
            />
            <Card
              bg="card2"
              heading="MS student login help"
              subhead="Please follow our step by step guide"
              image="/key.svg"
              redirect = "/mslogin-help"
            />
            <Card
              bg="card3"
              heading="Cannot find what you're looking for? Contact Us."
              subhead="Feel free to contact us"
              image="/hand.svg"
              redirect = "/contact"
            />
          </div>
        </div>
        <Faq />
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <img
                src="https://cdn-ecapl.nitrocdn.com/ZjKOAmOIwkrmZnKyWUQZWPaGEUejoOFO/assets/images/optimized/rev-e96bfb6/selcedu.com/wp-content/uploads/2022/09/SELC-college-logo-white.png"
                alt="SELC College Logo"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                Welcome to SELC College Help Desk
              </h2>
              <p className="text-gray-600 mb-4">
                We're here to assist you. If you have any questions or concerns,
                feel free to reach out to us.
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
