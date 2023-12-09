import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import { useNavigate } from "react-router-dom";
import {  Text  } from "@chakra-ui/react";
const QrReaderPage = () => {
  const navigate = useNavigate();
  const delay = 500;

  const previewStyle = {
    height: "100%",
    width: "100%",
  };

  const [result, setResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setResult(result);
      navigate("/about");
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <div >
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        
        <p>{result}</p>
      </div>
    </>
  );
};

export default QrReaderPage;
