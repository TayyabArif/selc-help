import React, { createContext, useContext, useState } from 'react';

const TourContext = createContext();

export function TourProvider({ children }) {
  const [stepCount, setStepCount] = useState(1);

  const incrementStep = () => {
    setStepCount(stepCount + 1);
  };
  const handleSkip = () => {
    setStepCount(6);
  };

  return (
    <TourContext.Provider value={{ stepCount, incrementStep, handleSkip }}>
      {children}
    </TourContext.Provider>
  );
};

export function useTour(){
  return useContext(TourContext);
};
