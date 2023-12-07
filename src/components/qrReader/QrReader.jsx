import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

const QrReaderPage = () => {
  const delay = 500;

  const previewStyle = {
    height: "100%",
    width: "100%",
  };

  const [result, setResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
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
