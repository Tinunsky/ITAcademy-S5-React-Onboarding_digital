import React from "react";
import "./styles.css";
import { useState } from "react";
import { MyCard } from "./MyCard";
import img1 from "./images/time_managment.svg";
import img2 from "./images/programming.svg";
import img3 from "./images/meditation.svg";

export function App() {
  const [step, setStep] = useState(0);
  const tutorialData = [
    {
      title: "Dedica muchas horas",
      description: "Bla bla, me pudieron dar un texto",
      bgColor: "#189AB4",
      image: img1,
    },
    {
      title: "Programa proyectos propios",
      description: "Seria mejor tener un texto",
      bgColor: "#D3D3D3",
      image: img2,
    },
    {
      title: "Descansa",
      description: "Vale, lo voy a inventar yo aqui la la la",
      bgColor: "#FFC55C",
      image: img3,
    },
  ];

  function nextStep() {
    if (step < tutorialData.length - 1) {
      setStep((currentStep) => {
        return currentStep + 1;
      });
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep((currentStep) => {
        return currentStep - 1;
      });
    }
  }

  function handleDotClick(index) {
    setStep(index);
  }

  return (
    <>
      <MyCard
        // currentCardData={tutorialData[step]}
        handleNext={nextStep}
        handlePrevious={prevStep}
        index={step}
        tutorialData={tutorialData}
        handleDotClick={handleDotClick}
      />
    </>
  );
}
