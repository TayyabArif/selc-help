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
        className="w-full py-12 sm:py-16 lg:py-14 xl:py-14 mb-10"
        id="target_faq"
      >
      </section>
    </>
  );
};

export default Faq;
