import React, { useState } from "react";
import trackingMaps from "../image/TrackingMaps.svg";
import order from "../image/Order.svg";
import tree from "../image/tree.svg";
import arrow from "../image/arrow.svg";
import { useNavigate } from "react-router-dom";
const steps = [
  {
    title: "Ağac himayə götür",
    desc: "You don't have to go far to find a good restaurant, we have provided all the restaurants that are near you",
    img: trackingMaps,
  },
  {
    title: "Suallara cavab ver",
    desc: "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    img: order,
  },
  {
    title: "Ağaca qulluq et",
    desc: "You can eat at expensive restaurants with an affordable price",
    img: tree,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Perform redirection or any other action when all steps are completed
      navigate("/welcome");
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="stepperContainer">
      <div className="content">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={currentStepData.img}
              alt={`Step ${currentStep + 1}`}
              className="stepImage"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 style={{ fontWeight: "semibold", fontSize: "24px" }}>
            {currentStepData.title}
          </h2>
          <p style={{ color: "#4B5563", fontSize: "16px", margin: "0 3rem" }}>
            {currentStepData.desc}
          </p>
        </div>
      </div>
      <div className="footer">
        <button onClick={handleSkip}>Skip</button>
        <div className="dots">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`dot ${currentStep === index ? "activeDot" : ""}`}
              onClick={() => setCurrentStep(index)}
            ></div>
          ))}
        </div>
        <button
          className="animated fadeInUp"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          <img src={arrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
