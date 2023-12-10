import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Link
} from "@chakra-ui/react";
const QrReaderComponent = () => {
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
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>

      <Box mx="30px" textAlign="center" bgColor={"green"} color="white" p={"10px 30px"}  fontSize="22px" borderRadius="20px" mt="40px">
      <Link href="/map" color="white">Geri qayıt</Link>
      </Box>
    </div>
  );
};

export default QrReaderComponent;
