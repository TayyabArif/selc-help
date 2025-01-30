import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTour } from '@/contexts/TourContext';
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

  const [isloginClick, setIsLoginClick] = useState("");
  const { stepCount, incrementStep, handleSkip } = useTour();
  useEffect(() => {
    if (stepCount === 4) {
      setIsLoginClick("login")
    }
  }, [stepCount])
  return (
    <Layout visitCount={visitCount} isArrive={isArrive}>
      <div className="flex w-full flex-col bg-white h-full mt-20">
        <div id="cardsSection">
        </div>
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
            <Image src="/contact-info-1.PNG" alt="Program Division Anugrah" width={700} height={300} className="mx-auto mb-36 w-[50%] shadow-lg rounded" />
          </div>
      </div>
    </Layout>
  );
}
