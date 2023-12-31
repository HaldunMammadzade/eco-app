import React, { useState } from "react";
import trackingMaps from "../image/TrackingMaps.svg";
import order from "../image/Order.svg";
import tree from "../image/tree.svg";
import tree2 from "../image/tree2.svg";
import arrow from "../image/arrow.svg";
import { useNavigate } from "react-router-dom";
const steps = [
  {
    title: "Ağac himayə götür",
    desc: "Ağacla təmasa keçib QR kodu oxut və ağacı himayə götür",
    img: trackingMaps,
  },
  {
    title: "Suallara cavab ver",
    desc: "Ətraf-mühit haqqında məlumatlı olmaq və yeni bilgilər mənimsəmək üçün sualları cavabla",
    img: order,
  },
  {
    title: "Ağaca qulluq et",
    desc: "Suallara doğru cavablar verərək ağaca qulluğu tamamla",
    img: tree,
  },
  {
    title: "Green Coin-lər qazan",
    desc: "Bu prosesi davamlı edərək Green Coin-lər qazan və hədiyyələr seç",
    img: tree2,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate("/welcome");
  };

  const handleNext = () => {
    console.log(currentStep);
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
            className="animated flipInY"
          >
            <img
              src={currentStepData.img}
              alt={`Step ${currentStep + 1}`}
              className="animated flipInY  stepImage"
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
        <button className="custom-btn" onClick={handleSkip}>
          Keç
        </button>
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
          className="animated fadeInUp custom-btn"
          onClick={handleNext}
          // disabled={currentStep === steps.length - 1}
        >
          <img src={arrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
