import Card from "@/components/Card";
import Faq from "@/components/Faq";
import Layout from "@/components/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-full flex-col bg-white h-full">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center w-full h-[350px]"
          style={{ backgroundImage: `url("/home-bg.png")` }}
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
            Welcome to Student Help Desk
            </p>
            <p className="text-white font-medium text-[18px] font-custom">
              Check our step by step guide. Feel free to contact us
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center mt-14 mb-8">
          <div className="flex gap-5 w-full justify-center">
            <Card
              bg="card1"
              heading="Student portal"
              subhead="Please follow our step by step guide"
              image="/identification.svg"
              redirect = "/login-help"
            />
            <Card
              bg="card2"
              heading="MS student login help"
              subhead="Please follow our step by step guide"
              image="/microsoft.svg"
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
      </div>
    </Layout>
  );
}
